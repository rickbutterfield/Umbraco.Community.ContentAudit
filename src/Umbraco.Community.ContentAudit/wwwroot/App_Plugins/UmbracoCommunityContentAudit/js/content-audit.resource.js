﻿(function () {
    'use strict';

    function contentAuditResource($http, $sce, umbRequestHelper) {
        const apiUrl = "/umbraco/content-audit/api/v1";

        const resource = {
            getLatestAuditOverview: getLatestAuditOverview,
            getLatestAuditData: getLatestAuditData,
            getLatestPageAuditData: getLatestPageAuditData,
            getAllIssues: getAllIssues,
            getIssue: getIssue,
            getHealthScore: getHealthScore,
            getSettings: getSettings,
            getOutboundLinks: getOutboundLinks,
            getInboundLinks: getInboundLinks,
            getDuplicatePages: getDuplicatePages,
            getImageAltText: getImageAltText,
            getMetadata: getMetadata,
            getOrphanedPages: getOrphanedPages,
            renderTypeLabel: renderTypeLabel,
            renderPriorityLabel: renderPriorityLabel,
            renderStatusCodeLabel: renderStatusCodeLabel
        };

        const issueTypeConfigMap = [
            {
                label: 'Opportunity',
                icon: 'icon-info',
                class: 'opportunity',
                color: 'default'
            },
            {
                label: 'Warning',
                icon: 'icon-stop-alt',
                class: 'warning',
                color: 'warning'
            },
            {
                label: 'Issue',
                icon: 'icon-alert',
                class: 'issue',
                color: 'danger'
            }
        ];

        const issuePriorityConfigMap = [
            {
                label: 'Low',
                icon: 'icon-navigation-bottom',
                class: 'low',
                color: 'default'
            },
            {
                label: 'Medium',
                icon: 'icon-navigation-road',
                class: 'medium',
                color: 'warning'
            },
            {
                label: 'High',
                icon: 'icon-navigation-top',
                class: 'high',
                color: 'danger'
            }
        ];

        function getLatestAuditOverview(skip, take, filter) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/latest-audit`),
                'Failed getting latest audit data'
            )
        }

        function getAllIssues(skip, take, filter) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/all-issues?skip=${skip}&take=${take}&filter=${filter}`),
                'Failed getting all issue data'
            )
        }

        function getIssue(unique) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/issue?issueGuid=${unique}`),
                `Failed getting issue ${unique} data`
            )
        }

        function getOutboundLinks(skip, take, filter) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/external-links?skip=${skip}&take=${take}&filter=${filter}`),
                'Failed getting outbound links data'
            )
        }

        function getInboundLinks(skip, take, filter) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/internal-links?skip=${skip}&take=${take}&filter=${filter}`),
                'Failed getting inbound links data'
            )
        }

        function getHealthScore() {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/health-score`),
                'Failed getting health score data'
            )
        }

        function getLatestAuditData(skip, take, filter, statusCode) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/latest-data?skip=${skip}&take=${take}&filter=${filter}&statusCode=${statusCode}`),
                'Failed getting latest audit data'
            )
        }

        function getLatestPageAuditData(unique) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/latest-page-data?unique=${unique}`),
                'Failed getting latest page audit data'
            )
        }

        function getDuplicatePages(skip, take, filter) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/duplicate-content?skip=${skip}&take=${take}&filter=${filter}`),
                'Failed getting duplicate pages data'
            )
        }

        function getImageAltText(skip, take, filter) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/all-images?skip=${skip}&take=${take}&filter=${filter}`),
                'Failed getting image data'
            )
        }

        function getMetadata(skip, take, filter) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/missing-metadata?skip=${skip}&take=${take}&filter=${filter}`),
                'Failed getting metadata data'
            )
        }

        function getOrphanedPages(skip, take, filter) {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/orphaned-pages?skip=${skip}&take=${take}&filter=${filter}`),
                'Failed getting orphaned pages data'
            )
        }

        function getSettings() {
            return umbRequestHelper.resourcePromise(
                $http.get(`${apiUrl}/get-settings`),
                'Failed getting settings data'
            )
        }

        function renderTypeLabel(type) {
            let index = type - 1;
            let config = issueTypeConfigMap[index];

            if (config != null) {
                return $sce.trustAsHtml(`
                    <uui-tag color="${config.color}">
                        <uui-icon name="${config.icon}"></uui-icon>
                        ${config.label}
                    </uui-tag>
                `);
            }
        }

        function renderPriorityLabel(priority) {
            let index = priority - 1;
            let config = issuePriorityConfigMap[index];

            if (config != null) {
                return $sce.trustAsHtml(`
                    <uui-tag color="${config.color}">
                        <uui-icon name="${config.icon}"></uui-icon>
                        ${config.label}
                    </uui-tag>
                `);
            }
        }

        function renderStatusCodeLabel(statusCode) {
            let colour = "";
            if (statusCode >= 200 && statusCode < 300) {
                colour = "positive";
            }

            if (statusCode >= 300 && statusCode < 400) {
                colour = "warning";
            }

            if (statusCode >= 400 && statusCode < 600) {
                colour = "danger";
            }
            return $sce.trustAsHtml(`
                <uui-tag color="${colour}">
                    ${statusCode}
                </uui-tag>
            `);
        }

        return resource;
    }

    angular.module('umbraco.resources').factory('Umbraco.Community.ContentAudit.Resource', contentAuditResource);
})();