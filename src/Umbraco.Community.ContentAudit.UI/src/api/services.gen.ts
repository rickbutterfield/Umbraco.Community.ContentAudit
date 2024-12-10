// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { GetAllIssuesResponse, GetDuplicateContentUrlsResponse, GetLatestAuditOverviewResponse, GetPagesWithMissingMetadataResponse, StartCrawlResponse } from './types.gen';

export class AuditService {
    /**
     * @returns unknown OK
     * @throws ApiError
     */
    public static getAllIssues(): CancelablePromise<GetAllIssuesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/content-audit/api/v1/all-issues'
        });
    }
    
    /**
     * @returns unknown OK
     * @throws ApiError
     */
    public static getDuplicateContentUrls(): CancelablePromise<GetDuplicateContentUrlsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/content-audit/api/v1/duplicate-content'
        });
    }
    
    /**
     * @returns unknown OK
     * @throws ApiError
     */
    public static getLatestAuditOverview(): CancelablePromise<GetLatestAuditOverviewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/content-audit/api/v1/latest-audit'
        });
    }
    
    /**
     * @returns unknown OK
     * @throws ApiError
     */
    public static getPagesWithMissingMetadata(): CancelablePromise<GetPagesWithMissingMetadataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/content-audit/api/v1/missing-metadata'
        });
    }
    
}

export class CrawlService {
    /**
     * @returns unknown OK
     * @throws ApiError
     */
    public static startCrawl(): CancelablePromise<StartCrawlResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/content-audit/api/v1/start-crawl'
        });
    }
    
}