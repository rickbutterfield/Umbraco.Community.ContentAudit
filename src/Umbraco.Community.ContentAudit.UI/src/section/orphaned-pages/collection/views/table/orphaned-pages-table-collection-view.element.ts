﻿import { UMB_COLLECTION_CONTEXT, UmbDefaultCollectionContext } from '@umbraco-cms/backoffice/collection';
import { css, customElement, html, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { InternalPageDto } from '../../../../../api';
import { UMB_EDIT_DOCUMENT_WORKSPACE_PATH_PATTERN } from '@umbraco-cms/backoffice/document';
import { UmbTableColumn, UmbTableItem, UmbTableConfig } from '../../../../../exports';
import { UmbModalRouteBuilder, UmbModalRouteRegistrationController } from '@umbraco-cms/backoffice/router';
import { UMB_WORKSPACE_MODAL } from '@umbraco-cms/backoffice/workspace';

@customElement('content-audit-orphaned-pages-table-collection-view')
export class ContentAuditOrphanedPagesTableCollectionViewElement extends UmbLitElement {

    @state()
    private _tableConfig: UmbTableConfig = {
        allowSelection: false,
        hideIcon: true
    };

    @state()
    private _tableColumns: Array<UmbTableColumn> = [
        {
            name: 'URL',
            alias: 'url',
        }
    ];

    @state()
    private _tableItems: Array<UmbTableItem> = [];

    #collectionContext?: UmbDefaultCollectionContext<InternalPageDto>;
    #routeBuilder?: UmbModalRouteBuilder;

    constructor() {
        super();

        this.consumeContext(UMB_COLLECTION_CONTEXT, (instance) => {
            this.#collectionContext = instance;
        });

        this.#registerModalRoute();
    }

    #registerModalRoute() {
        new UmbModalRouteRegistrationController(this, UMB_WORKSPACE_MODAL)
            .addAdditionalPath(':entityType')
            .onSetup((params) => {
                return { data: { entityType: params.entityType, preset: {} } };
            })
            .observeRouteBuilder((routeBuilder) => {
                this.#routeBuilder = routeBuilder;

                this.#observeCollectionItems();
            });
    }

    #observeCollectionItems() {
        if (!this.#collectionContext) return;
        this.observe(this.#collectionContext.items, (items) => this.#createTableItems(items), 'umbCollectionItemsObserver');
    }

    #createTableItems(urls: InternalPageDto[]) {
        const routeBuilder = this.#routeBuilder;
        if (!routeBuilder) throw new Error('Route builder not ready');

        this._tableItems = urls.map((page) => {
            const modalEditPath =
                routeBuilder({ entityType: 'document' }) +
                UMB_EDIT_DOCUMENT_WORKSPACE_PATH_PATTERN.generateLocal({ unique: page.nodeKey! });

            return {
                id: page.unique,
                entityType: page.entityType,
                icon: 'icon-alert',
                data: [
                    {
                        columnAlias: 'url',
                        value: html`<a href=${modalEditPath}>${page.url}</a>`
                    }
                ]
            }
        });
    }

    override render() {
        if (this._tableItems.length !== 0) {
            return html`
			    <umb-table
                    .config=${this._tableConfig}
                    .columns=${this._tableColumns}
                    .items=${this._tableItems}
                ></umb-table>
		    `;
        }
    }

    static override styles = [
        css`
			:host {
				display: flex;
				flex-direction: column;
			}
		`,
    ];
}

export default ContentAuditOrphanedPagesTableCollectionViewElement;

declare global {
    interface HTMLElementTagNameMap {
        'content-audit-orphaned-pages-table-collection-view': ContentAuditOrphanedPagesTableCollectionViewElement;
    }
}
