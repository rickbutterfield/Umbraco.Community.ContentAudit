// This file is auto-generated by @hey-api/openapi-ts

export type AccessibilityDto = {
    id: number;
    runId: number;
    url?: (string) | null;
    accessibilityIssues?: Array<(string)> | null;
    ariaLabelCount: number;
    ariaDescribedByCount: number;
    hasSkipToContent: boolean;
    hasProperHeadingStructure: boolean;
    colorContrastIssues?: Array<(string)> | null;
    createdDate: string;
};

export type AuditIssueProperty = {
    name?: (string) | null;
    alias?: (string) | null;
    labelTemplate?: (string) | null;
    elementName?: (string) | null;
};

export type ContentAnalysisDto = {
    id: number;
    runId: number;
    url?: (string) | null;
    wordCount: number;
    paragraphCount: number;
    images: number;
    resources: number;
    links: number;
    externalLinks: number;
    internalLinks: number;
    readabilityScore: number;
    keywordDensity?: {
        [key: string]: (number);
    } | null;
    missingAltTextImages?: (string) | null;
    missingTitleImages?: (string) | null;
};

export type ContentAuditSettings = {
    respectRobotsTxt: boolean;
    useUmbracoContentIndex: boolean;
    useSitemapXml: boolean;
    sitemapUrl: string;
    maxConcurrentCrawls: number;
};

export type ContentQualityDto = {
    id: number;
    runId: number;
    url?: (string) | null;
    hasDuplicateContent: boolean;
    duplicateContentUrls?: Array<(string)> | null;
    hasThinContent: boolean;
    contentScore: number;
    contentGaps?: Array<(string)> | null;
    contentStrengths?: Array<(string)> | null;
    createdDate: string;
};

export type CrawlDto = {
    url?: (string) | null;
    external: boolean;
    asset: boolean;
    crawled: boolean;
    blocked: boolean;
    unique: string;
};

export type EmissionsDto = {
    emissionsPerPageView: number;
    carbonRating?: (string) | null;
};

export type HealthScoreDto = {
    healthScore: number;
    totalPages: number;
    pagesWithErrors: number;
};

export type ImageDto = {
    entityType: string;
    id: number;
    runId: number;
    url?: (string) | null;
    isExternal: boolean;
    size?: (number) | null;
    statusCode: number;
    contentType?: (string) | null;
    altText?: (string) | null;
    title?: (string) | null;
    foundPage?: (string) | null;
    unique: string;
    createdDate: string;
    isBackground: boolean;
};

export type IssueDto = {
    unique: string;
    entityType: string;
    name: string;
    description: string;
    category: string;
    type: IssueType;
    priority: IssuePriority;
    numberOfUrls?: (number) | null;
    percentOfTotal: number;
    pages?: Array<(PageAnalysisDto)> | null;
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

export type LinkDto = {
    unique: string;
    entityType: string;
    id: number;
    runId: number;
    url?: (string) | null;
    isExternal: boolean;
    foundPage?: (string) | null;
    statusCode: number;
    contentType?: (string) | null;
    createdDate: string;
};

export type LinkGroupDto = {
    unique: string;
    entityType: string;
    url?: (string) | null;
    statusCode?: (number) | null;
    contentType?: (string) | null;
    links?: Array<(LinkDto)> | null;
};

export type OverviewDto = {
    runDate?: (string) | null;
    total?: (number) | null;
    totalInternal?: (number) | null;
    totalExternal?: (number) | null;
    totalAssets?: (number) | null;
    totalBlocked?: (number) | null;
};

export type PageAnalysisDto = {
    unique: string;
    entityType: string;
    links: Array<(LinkDto)>;
    resources: Array<(ResourceDto)>;
    images: Array<(ImageDto)>;
    issues: Array<(IssueDto)>;
    pageData: (PageDto);
    seoData: (SeoDto);
    contentAnalysis: (ContentAnalysisDto);
    performanceData: (PerformanceDto);
    accessibilityData: (AccessibilityDto);
    technicalSeoData: (TechnicalSeoDto);
    socialMediaData: (SocialMediaDto);
    contentQualityData: (ContentQualityDto);
    emissionsData: (EmissionsDto);
};

export type PagedImageDtoModel = {
    total: number;
    items: Array<(ImageDto)>;
};

export type PagedIssueDtoModel = {
    total: number;
    items: Array<(IssueDto)>;
};

export type PagedLinkGroupDtoModel = {
    total: number;
    items: Array<(LinkGroupDto)>;
};

export type PagedPageAnalysisDtoModel = {
    total: number;
    items: Array<(PageAnalysisDto)>;
};

export type PagedPageDtoModel = {
    total: number;
    items: Array<(PageDto)>;
};

export type PageDto = {
    entityType: string;
    id: number;
    runId: number;
    url?: (string) | null;
    unique: string;
    statusCode: number;
};

export type PerformanceDto = {
    id: number;
    runId: number;
    url?: (string) | null;
    pageLoadTime?: (number) | null;
    firstContentfulPaint?: (number) | null;
    largestContentfulPaint?: (number) | null;
    timeToInteractive?: (number) | null;
    totalRequests?: (number) | null;
    totalBytes?: (number) | null;
    resourceTimings?: Array<(ResourceTimingDto)> | null;
    createdDate: string;
};

export type ResourceDto = {
    entityType: string;
    id: number;
    runId: number;
    url?: (string) | null;
    isExternal: boolean;
    size?: (number) | null;
    statusCode: number;
    contentType?: (string) | null;
    foundPage?: (string) | null;
    unique: string;
    createdDate: string;
};

export type ResourceTimingDto = {
    url?: (string) | null;
    resourceType?: (string) | null;
    duration?: (number) | null;
    startTime?: (number) | null;
    size?: (number) | null;
};

export type SeoDto = {
    runId: number;
    url?: (string) | null;
    title?: (string) | null;
    metaDescription?: (string) | null;
    canonicalUrl?: (string) | null;
    h1?: (string) | null;
    h2s?: Array<(string)> | null;
    h3s?: Array<(string)> | null;
    hasNoIndex: boolean;
    hasNoFollow: boolean;
    isOrphaned: boolean;
    openGraphTitle?: (string) | null;
    openGraphDescription?: (string) | null;
    openGraphImage?: (string) | null;
    twitterCard?: (string) | null;
    twitterTitle?: (string) | null;
    twitterDescription?: (string) | null;
    twitterImage?: (string) | null;
    createdDate: string;
};

export type SocialMediaDto = {
    id: number;
    runId: number;
    url?: (string) | null;
    socialShareButtons?: Array<(string)> | null;
    hasFacebookPixel: boolean;
    hasTwitterPixel: boolean;
    hasLinkedInPixel: boolean;
    socialMediaLinks?: Array<(string)> | null;
    createdDate: string;
};

export type TechnicalSeoDto = {
    id: number;
    runId: number;
    url?: (string) | null;
    contentType?: (string) | null;
    charset?: (string) | null;
    hasGzipCompression: boolean;
    hasBrowserCaching: boolean;
    hasHttps: boolean;
    hasValidHtml: boolean;
    htmlValidationErrors?: Array<(string)> | null;
    hasSchemaMarkup: boolean;
    schemaType?: (string) | null;
    createdDate: string;
};

export type GetAllImagesData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetAllImagesResponse = ((PagedImageDtoModel));

export type GetAllIssuesData = {
    skip?: number;
    take?: number;
};

export type GetAllIssuesResponse = ((PagedIssueDtoModel));

export type GetDuplicateContentUrlsData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetDuplicateContentUrlsResponse = ((PagedPageDtoModel));

export type GetExternalLinksData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetExternalLinksResponse = ((PagedLinkGroupDtoModel));

export type GetHealthScoreResponse = ((HealthScoreDto));

export type GetInteralLinksData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetInteralLinksResponse = ((PagedLinkGroupDtoModel));

export type GetIssueData = {
    issueGuid?: string;
};

export type GetIssueResponse = ((IssueDto));

export type GetLatestAuditOverviewResponse = ((OverviewDto));

export type GetLatestAuditDataData = {
    filter?: string;
    skip?: number;
    statusCode?: number;
    take?: number;
};

export type GetLatestAuditDataResponse = ((PagedPageAnalysisDtoModel));

export type GetLatestPageAuditDataData = {
    unique?: string;
};

export type GetLatestPageAuditDataResponse = ((PageAnalysisDto));

export type GetPagesWithMissingMetadataData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetPagesWithMissingMetadataResponse = ((PagedPageAnalysisDtoModel));

export type GetOrphanedPagesData = {
    filter?: string;
    skip?: number;
    take?: number;
};

export type GetOrphanedPagesResponse = ((PagedPageDtoModel));

export type StartCrawlResponse = (Array<(CrawlDto)>);

export type GetSettingsResponse = ((ContentAuditSettings));