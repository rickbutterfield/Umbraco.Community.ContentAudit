﻿using Umbraco.Community.ContentAudit.Models.Dtos;

namespace Umbraco.Community.ContentAudit.Interfaces
{
    public interface IAuditImageIssue : IAuditIssue
    {
        IEnumerable<ImageDto> CheckImages(IEnumerable<ImageDto> images, IEnumerable<InternalPageDto> pages);
    }
}
