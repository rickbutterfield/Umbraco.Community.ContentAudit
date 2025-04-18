﻿using NPoco;
using Umbraco.Cms.Infrastructure.Persistence.DatabaseAnnotations;
using Umbraco.Community.ContentAudit.Models.Dtos;

namespace Umbraco.Community.ContentAudit.Schemas
{
    [TableName(TableName)]
    [PrimaryKey("Id", AutoIncrement = true)]
    public class PageSchema
    {
        public const string TableName = "umbContentAuditInternalPages";

        public PageSchema() { }

        public PageSchema(PageDto pageDto, int runId)
        {
            RunId = runId;
            Url = pageDto.Url;
            Unique = pageDto.Unique;
            StatusCode = pageDto.StatusCode;
        }

        [PrimaryKeyColumn(AutoIncrement = true, IdentitySeed = 1)]
        public int Id { get; set; }

        public int RunId { get; set; }

        [NullSetting(NullSetting = NullSettings.Null)]
        public string? Url { get; set; }

        public bool IsAsset { get; set; }

        public Guid Unique { get; set; }

        public int StatusCode { get; set; }

        public DateTime CreatedDate => DateTime.Now;
    }
}
