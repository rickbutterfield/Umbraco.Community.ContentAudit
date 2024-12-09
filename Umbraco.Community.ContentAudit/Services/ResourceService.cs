﻿using HtmlAgilityPack;
using Umbraco.Community.ContentAudit.Interfaces;
using Umbraco.Community.ContentAudit.Models;

namespace Umbraco.Community.ContentAudit.Services
{
    public class ResourceService : IResourceService
    {
        private readonly HttpClient _httpClient;

        public ResourceService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<PageResponseDto> GetPageWithAssetsAsync(string url, Guid? nodeKey = null)
        {
            var response = new PageResponseDto
            {
                Url = url,
                NodeKey = nodeKey
            };

            // 1. Fetch initial HTML
            HttpResponseMessage initialResponse = await _httpClient.GetAsync(url);
            response.StatusCode = (int)initialResponse.StatusCode;
            response.ContentType = initialResponse.Content.Headers.ContentType;

            initialResponse.EnsureSuccessStatusCode();
            var htmlBytes = await initialResponse.Content.ReadAsByteArrayAsync();
            response.Size = htmlBytes.LongLength;

            // Decode HTML
            string html = System.Text.Encoding.UTF8.GetString(htmlBytes);
            response.PageContent = html;

            // 2. Parse HTML to find Title and Assets
            var doc = new HtmlDocument();
            doc.LoadHtml(html);

            // Extract page title
            var titleNode = doc.DocumentNode.SelectSingleNode("//title");
            if (titleNode != null)
            {
                response.PageTitle = titleNode.InnerText.Trim();
            }

            // Collect asset URLs (images, scripts, links for CSS)
            List<string> assetUrls = new List<string>();

            // Images
            var imgNodes = doc.DocumentNode.SelectNodes("//img[@src]");
            if (imgNodes != null)
            {
                assetUrls.AddRange(imgNodes.Select(x => x.GetAttributeValue("src", "")));
            }

            // Scripts
            var scriptNodes = doc.DocumentNode.SelectNodes("//script[@src]");
            if (scriptNodes != null)
            {
                assetUrls.AddRange(scriptNodes.Select(x => x.GetAttributeValue("src", "")));
            }

            // Stylesheets
            var linkNodes = doc.DocumentNode.SelectNodes("//link[@rel='stylesheet' and @href]");
            if (linkNodes != null)
            {
                assetUrls.AddRange(linkNodes.Select(x => x.GetAttributeValue("href", "")));
            }

            // Resolve relative URLs and get sizes
            Uri baseUri = new Uri(url);
            long totalAssetsSize = 0;

            foreach (var relativeUrl in assetUrls.Distinct())
            {
                if (string.IsNullOrWhiteSpace(relativeUrl))
                    continue;

                var assetUri = new Uri(baseUri, relativeUrl);
                var resourceDetails = await GetResourceSizeAsync(assetUri);
                response.Resources.Add(resourceDetails);
                if (resourceDetails.Size.HasValue)
                {
                    totalAssetsSize += resourceDetails.Size.Value;
                }
            }

            // Update total page size to include assets
            response.Size += totalAssetsSize;

            return response;
        }

        private async Task<PageResourceDto> GetResourceSizeAsync(Uri assetUri)
        {
            var resource = new PageResourceDto { Url = assetUri.ToString() };

            // Try HEAD request first
            var headRequest = new HttpRequestMessage(HttpMethod.Head, assetUri);
            var headResponse = await _httpClient.SendAsync(headRequest, HttpCompletionOption.ResponseHeadersRead);

            resource.StatusCode = (int)headResponse.StatusCode;
            resource.ContentType = headResponse.Content.Headers.ContentType;

            if (headResponse.IsSuccessStatusCode && headResponse.Content.Headers.ContentLength.HasValue)
            {
                resource.Size = headResponse.Content.Headers.ContentLength.Value;
            }
            else
            {
                // If we didn't get content length from HEAD, try GET
                var getRequest = new HttpRequestMessage(HttpMethod.Get, assetUri);
                var getResponse = await _httpClient.SendAsync(getRequest, HttpCompletionOption.ResponseHeadersRead);
                resource.StatusCode = (int)getResponse.StatusCode;

                if (getResponse.IsSuccessStatusCode && getResponse.Content.Headers.ContentLength.HasValue)
                {
                    resource.Size = getResponse.Content.Headers.ContentLength.Value;
                }
                else
                {
                    // Fall back to fully downloading if no content length is provided
                    var assetBytes = await getResponse.Content.ReadAsByteArrayAsync();
                    resource.Size = assetBytes.LongLength;
                }
            }

            return resource;
        }
    }
}
