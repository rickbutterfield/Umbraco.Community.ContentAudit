// This file is auto-generated by @hey-api/openapi-ts

export type AuditIssueProperty = {
    name?: string | null;
    alias?: string | null;
    labelTemplate?: string | null;
    elementName?: string | null;
};

export type ContentAuditSettings = {
    respectRobotsTxt: boolean;
    useUmbracoContentIndex: boolean;
    useSitemapXml: boolean;
    sitemapUrl: string;
    maxConcurrentCrawls: number;
};

export type CrawlDto = {
    url?: string | null;
    external: boolean;
    asset: boolean;
    crawled: boolean;
    blocked: boolean;
    nodeKey: string;
};

export type ExternalPageDto = {
    unique: string;
    entityType: string;
    id?: number | null;
    url?: string | null;
    nodeKey?: string | null;
    foundPage?: string | null;
    isAsset: boolean;
    size?: number | null;
    statusCode: number;
    contentType?: string | null;
};

export type ExternalPageGroupDto = {
    unique: string;
    entityType: string;
    url?: string | null;
    statusCode?: number | null;
    contentType?: string | null;
    externalPages?: Array<(ExternalPageDto)> | null;
};

export type HealthScoreDto = {
    healthScore: number;
    totalPages: number;
    pagesWithErrors: number;
};

export type ImageDto = {
    unique: string;
    entityType: string;
    url?: string | null;
    isExternal: boolean;
    isAsset: boolean;
    isBackground: boolean;
    size?: number | null;
    statusCode: number;
    contentType?: string | null;
    altText?: string | null;
    foundPage?: string | null;
    nodeKey?: string | null;
};

export type InternalPageDto = {
    unique: string;
    entityType: string;
    id?: number | null;
    nodeKey?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    metaKeywords?: string | null;
    metaRobots?: string | null;
    canonicalUrl?: string | null;
    canonicalised: boolean;
    h1: Array<(string)>;
    h2: Array<(string)>;
    outboundLinks: Array<(string)>;
    url?: string | null;
    isOrphaned: boolean;
    isAsset: boolean;
    size?: number | null;
    statusCode: number;
    contentType?: string | null;
    links: Array<(ResourceDto)>;
    resources: Array<(ResourceDto)>;
    images: Array<(ImageDto)>;
    emissionsPerPageView?: number | null;
    carbonRating?: string | null;
};

export type InternalPageGroupDto = {
    unique: string;
    entityType: string;
    url?: string | null;
    statusCode?: number | null;
    contentType?: string | null;
    internalPages?: Array<(InternalPageDto)> | null;
};

export type IssueDto = {
    unique: string;
    entityType: string;
    name: string;
    description: string;
    category: string;
    type: IssueType;
    priority: IssuePriority;
    numberOfUrls?: number | null;
    percentOfTotal: number;
    pages?: Array<(InternalPageDto)> | null;
    images?: Array<(ImageDto)> | null;
    exposedProperties?: Array<(AuditIssueProperty)> | null;
    priorityScore: number;
};

export enum IssuePriority {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High'
}

export enum IssueType {
    OPPORTUNITY = 'Opportunity',
    WARNING = 'Warning',
    ISSUE = 'Issue'
}

export type OverviewDto = {
    runDate?: string | null;
    total?: number | null;
    totalInternal?: number | null;
    totalExternal?: number | null;
    totalAssets?: number | null;
    totalBlocked?: number | null;
};

export type PagedExternalPageGroupDtoModel = {
    total: number;
    items: Array<(ExternalPageGroupDto)>;
};

export type PagedImageDtoModel = {
    total: number;
    items: Array<(ImageDto)>;
};

export type PagedInternalPageDtoModel = {
    total: number;
    items: Array<(InternalPageDto)>;
};

export type PagedInternalPageGroupDtoModel = {
    total: number;
    items: Array<(InternalPageGroupDto)>;
};

export type PagedIssueDtoModel = {
    total: number;
    items: Array<(IssueDto)>;
};

export type ResourceDto = {
    url?: string | null;
    isExternal: boolean;
    isAsset: boolean;
    size?: number | null;
    statusCode: number;
    contentType?: string | null;
};

export type GetAllImagesData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetAllImagesResponse = PagedImageDtoModel;

export type GetAllIssuesData = {
    skip?: number;
    take?: number;
};

export type GetAllIssuesResponse = PagedIssueDtoModel;

export type GetDuplicateContentUrlsData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetDuplicateContentUrlsResponse = PagedInternalPageGroupDtoModel;

export type GetExternalLinksData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetExternalLinksResponse = PagedExternalPageGroupDtoModel;

export type GetHealthScoreResponse = HealthScoreDto;

export type GetInteralLinksData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetInteralLinksResponse = PagedInternalPageGroupDtoModel;

export type GetIssueData = {
    issueGuid?: string;
};

export type GetIssueResponse = IssueDto;

export type GetLatestAuditOverviewResponse = OverviewDto;

export type GetLatestAuditDataData = {
    filter?: string;
    skip?: number;
    statusCode?: number;
    take?: number;
};

export type GetLatestAuditDataResponse = PagedInternalPageDtoModel;

export type GetPagesWithMissingMetadataData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetPagesWithMissingMetadataResponse = PagedInternalPageDtoModel;

export type GetOrphanedPagesData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetOrphanedPagesResponse = PagedInternalPageDtoModel;

export type StartCrawlResponse = Array<(CrawlDto)>;

export type GetSettingsResponse = ContentAuditSettings;

export type $OpenApiTs = {
    '/umbraco/content-audit/api/v1/all-images': {
        get: {
            req: GetAllImagesData;
            res: {
                /**
                 * OK
                 */
                200: PagedImageDtoModel;
            };
        };
    };
    '/umbraco/content-audit/api/v1/all-issues': {
        get: {
            req: GetAllIssuesData;
            res: {
                /**
                 * OK
                 */
                200: PagedIssueDtoModel;
            };
        };
    };
    '/umbraco/content-audit/api/v1/duplicate-content': {
        get: {
            req: GetDuplicateContentUrlsData;
            res: {
                /**
                 * OK
                 */
                200: PagedInternalPageGroupDtoModel;
            };
        };
    };
    '/umbraco/content-audit/api/v1/external-links': {
        get: {
            req: GetExternalLinksData;
            res: {
                /**
                 * OK
                 */
                200: PagedExternalPageGroupDtoModel;
            };
        };
    };
    '/umbraco/content-audit/api/v1/health-score': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: HealthScoreDto;
            };
        };
    };
    '/umbraco/content-audit/api/v1/internal-links': {
        get: {
            req: GetInteralLinksData;
            res: {
                /**
                 * OK
                 */
                200: PagedInternalPageGroupDtoModel;
            };
        };
    };
    '/umbraco/content-audit/api/v1/issue': {
        get: {
            req: GetIssueData;
            res: {
                /**
                 * OK
                 */
                200: IssueDto;
            };
        };
    };
    '/umbraco/content-audit/api/v1/latest-audit': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: OverviewDto;
            };
        };
    };
    '/umbraco/content-audit/api/v1/latest-data': {
        get: {
            req: GetLatestAuditDataData;
            res: {
                /**
                 * OK
                 */
                200: PagedInternalPageDtoModel;
            };
        };
    };
    '/umbraco/content-audit/api/v1/missing-metadata': {
        get: {
            req: GetPagesWithMissingMetadataData;
            res: {
                /**
                 * OK
                 */
                200: PagedInternalPageDtoModel;
            };
        };
    };
    '/umbraco/content-audit/api/v1/orphaned-pages': {
        get: {
            req: GetOrphanedPagesData;
            res: {
                /**
                 * OK
                 */
                200: PagedInternalPageDtoModel;
            };
        };
    };
    '/umbraco/content-audit/api/v1/start-crawl': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: Array<(CrawlDto)>;
            };
        };
    };
    '/umbraco/content-audit/api/v1/get-settings': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: ContentAuditSettings;
            };
        };
    };
};