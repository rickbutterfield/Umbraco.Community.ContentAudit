﻿using Umbraco.Community.ContentAudit.Common.Enums;
using Umbraco.Community.ContentAudit.Interfaces;
using Umbraco.Community.ContentAudit.Models;

namespace Umbraco.Community.ContentAudit.AuditIssues
{
    public class MetaDescriptionMissing : IAuditIssue
    {
        public string Name => "Description missing";

        public string Description => "Pages where meta descriptions are missing";

        public string Category => "Metadata";

        public IssueType Type => IssueType.Issue;

        public IssuePriority Priority => IssuePriority.High;

        public int CheckPages(IEnumerable<PageResponseDto> pages)
        {
            return pages.Count(x => string.IsNullOrEmpty(x.MetaDescription));
        }
    }
}
