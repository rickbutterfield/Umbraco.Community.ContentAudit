﻿using NPoco;
using System.Text.Json.Serialization;
using Umbraco.Cms.Infrastructure.Persistence.DatabaseAnnotations;
using Umbraco.Community.ContentAudit.Models;

namespace Umbraco.Community.ContentAudit.Schemas
{
    [TableName(TableName)]
    [PrimaryKey("Id", AutoIncrement = true)]
    [ExplicitColumns]
    public class PageSchema
    {
        public const string TableName = "umbContentAuditPages";

        public PageSchema() { }

        public PageSchema(PageResponseDto pageContent, int runId)
        {
            RunId = runId;
            Url = pageContent.Url;
            NodeKey = pageContent.NodeKey;
            StatusCode = pageContent.StatusCode;
            ContentType = pageContent.ContentType?.ToString();
            MetaTitle = pageContent.MetaTitle;

            MetaDescription = pageContent.MetaDescription;
            MetaKeywords = pageContent.MetaKeywords;
            CanonicalUrl = pageContent.CanonicalUrl;
            Canonicalised = pageContent.Canonicalised;
            
            PageSize = pageContent.Size.GetValueOrDefault();
        }

        [PrimaryKeyColumn(AutoIncrement = true, IdentitySeed = 1)]
        [Column("Id")]
        public int Id { get; set; }

        [Column("RunId")]
        public int RunId { get; set; }

        [Column("Url")]
        [NullSetting(NullSetting = NullSettings.Null)]
        public string? Url { get; set; }

        [Column("NodeKey")]
        [NullSetting(NullSetting = NullSettings.Null)]
        public Guid? NodeKey { get; set; }

        [Column("StatusCode")]
        public int StatusCode { get; set; }

        [Column("ContentType")]
        [NullSetting(NullSetting = NullSettings.Null)]
        public string? ContentType { get; set; }

        [Column("MetaTitle")]
        [NullSetting(NullSetting = NullSettings.Null)]
        public string? MetaTitle { get; set; }

        [Column("MetaDescription")]
        [NullSetting(NullSetting = NullSettings.Null)]
        public string? MetaDescription { get; set; }

        [Column("MetaKeywords")]
        [NullSetting(NullSetting = NullSettings.Null)]
        public string? MetaKeywords { get; set; }

        [Column("CanonicalUrl")]
        [NullSetting(NullSetting = NullSettings.Null)]
        public string? CanonicalUrl { get; set; }

        [Column("Canonicalised")]
        [NullSetting(NullSetting = NullSettings.Null)]
        public bool Canonicalised { get; set; }

        [Column("PageSize")]
        public double PageSize { get; set; }
    }
}
