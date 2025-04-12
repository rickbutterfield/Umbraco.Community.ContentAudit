﻿using Umbraco.Community.ContentAudit.Common.Enums;
using Umbraco.Community.ContentAudit.Interfaces;
using Umbraco.Community.ContentAudit.Models;

namespace Umbraco.Community.ContentAudit.AuditIssues
{
    public class MissingH2 : IAuditPageIssue
    {
        public Guid Id => new Guid("da974a36-0f27-4cad-bd8b-d050f16551a3");

        public string Name => "H2s Missing";

        public string Description => "The page contains no H2s";

        public string Category => "Content";

        public IssueType Type => IssueType.Warning;

        public IssuePriority Priority => IssuePriority.Medium;

        public IEnumerable<AuditIssueProperty> ExposedProperties => default;

        public IEnumerable<PageAnalysisDto> CheckPages(IEnumerable<PageAnalysisDto> pages)
        {
            return pages.Where(x => x.PageData.StatusCode == 200 && x.SeoData != null && x.SeoData.H2s != null && x.SeoData?.H2s.Where(y => string.IsNullOrEmpty(y)).Any() == false);
        }
    }
}
