// This file is auto-generated by @hey-api/openapi-ts

export type AuditIssueDto = {
    name: string;
    description: string;
    category: string;
    type: IssueType;
    priority: IssuePriority;
    numberOfUrls?: number | null;
    percentOfTotal: number;
    priorityScore: number;
};

export type AuditOverviewDto = {
    runDate?: string | null;
    totalPages?: number | null;
    totalPagesCrawled?: number | null;
    totalPagesBlocked?: number | null;
};

export type HealthScoreDto = {
    healthScore: number;
    totalPages: number;
    pagesWithErrors: number;
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

export type MediaTypeHeaderValue = {
    charSet?: string | null;
    readonly parameters: Array<(NameValueHeaderValue)>;
    mediaType?: string | null;
};

export type NameValueHeaderValue = {
    name: string;
    value?: string | null;
};

export type PageResourceDto = {
    url?: string | null;
    size?: number | null;
    statusCode: number;
    contentType?: MediaTypeHeaderValue | null;
};

export type PageResponseDto = {
    url?: string | null;
    size?: number | null;
    statusCode: number;
    contentType?: MediaTypeHeaderValue | null;
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
    resources: Array<(PageResourceDto)>;
    links: Array<(string)>;
};

export type GetAllIssuesResponse = Array<(AuditIssueDto)>;

export type GetDuplicateContentUrlsResponse = {
    [key: string]: Array<(PageResponseDto)>;
};

export type GetHealthScoreResponse = HealthScoreDto;

export type GetLatestAuditOverviewResponse = AuditOverviewDto;

export type GetPagesWithMissingMetadataResponse = Array<(PageResponseDto)>;

export type StartCrawlResponse = Array<(PageResponseDto)>;

export type $OpenApiTs = {
    '/umbraco/content-audit/api/v1/all-issues': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: Array<(AuditIssueDto)>;
            };
        };
    };
    '/umbraco/content-audit/api/v1/duplicate-content': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: {
                    [key: string]: Array<(PageResponseDto)>;
                };
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
    '/umbraco/content-audit/api/v1/latest-audit': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: AuditOverviewDto;
            };
        };
    };
    '/umbraco/content-audit/api/v1/missing-metadata': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: Array<(PageResponseDto)>;
            };
        };
    };
    '/umbraco/content-audit/api/v1/start-crawl': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: Array<(PageResponseDto)>;
            };
        };
    };
};