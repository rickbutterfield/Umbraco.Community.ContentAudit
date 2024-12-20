﻿using Umbraco.Community.ContentAudit.Common.Enums;
using Umbraco.Community.ContentAudit.Interfaces;

namespace Umbraco.Community.ContentAudit.Models
{
    public class IssueDto : BaseContentAuditDto
    {
        public IssueDto() { }

        public IssueDto(IAuditIssue issue)
        {
            Unique = issue.Id;
            EntityType = "audit-issue";
            Name = issue.Name;
            Description = issue.Description;
            Category = issue.Category;
            Type = issue.Type;
            Priority = issue.Priority;
        }

        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public IssueType Type { get; set; }
        public IssuePriority Priority { get; set; }
        public int? NumberOfUrls { get; set; }
        public double PercentOfTotal { get; set; }
        public IEnumerable<InternalPageDto>? Pages { get; set; }
        public IEnumerable<ImageDto>? Images { get; set; }

        public double PriorityScore { get; set; }
    }
}
