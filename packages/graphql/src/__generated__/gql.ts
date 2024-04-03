/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation CreateEmptyCartMutation {\n        createEmptyCart\n    }\n": types.CreateEmptyCartMutationDocument,
    "\n    query GetBreadcrumbs($uid: String!) {\n        categories(filters: { category_uid: { in: [$uid] } }) {\n            items {\n                breadcrumbs {\n                    category_uid\n                    # We may not need level if `breadcrumbs` is sorted.\n                    category_level\n                    category_name\n                    category_url_path\n                }\n                uid\n                name\n                url_path\n            }\n        }\n    }\n":
        types.GetBreadcrumbsDocument,
    "\n    query GetCategorySortMethods($uid: String!) {\n        products(filter: { category_uid: { eq: $uid } }) {\n            sort_fields {\n                default\n                options {\n                    label\n                    value\n                }\n            }\n        }\n    }\n":
        types.GetCategorySortMethodsDocument,
    "\n    query GetMegaMenuCategories {\n        categories {\n            items {\n                uid\n                name\n                children {\n                    uid\n                    include_in_menu\n                    name\n                    position\n                    url_key\n                    url_path\n                    children {\n                        uid\n                        include_in_menu\n                        name\n                        position\n                        url_key\n                        url_path\n                        children {\n                            uid\n                            include_in_menu\n                            name\n                            position\n                            url_key\n                            url_path\n                            children {\n                                uid\n                                include_in_menu\n                                name\n                                position\n                                url_key\n                                url_path\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n":
        types.GetMegaMenuCategoriesDocument,
    "\n    query GetCmsBlocks($identifiers: [String]) {\n        cmsBlocks(identifiers: $identifiers) {\n            items {\n                identifier\n                title\n                content\n            }\n        }\n    }\n":
        types.GetCmsBlocksDocument,
    "\n    query GetGurrency {\n        currency {\n            default_display_currency_code\n            available_currency_codes\n        }\n    }\n":
        types.GetGurrencyDocument,
    "\n    query getProductDetailForProductPage($urlKey: String!) {\n        products(filter: { url_key: { eq: $urlKey } }) {\n            items {\n                id\n                uid\n                ...ProductDetailsFragment\n            }\n        }\n    }\n":
        types.GetProductDetailForProductPageDocument,
    "\n    fragment ProductDetailsFragment on ProductInterface {\n        id\n        uid\n        __typename\n        meta_title\n        meta_keyword\n        meta_description\n        categories {\n            uid\n            breadcrumbs {\n                category_uid\n            }\n        }\n        sku\n        name\n        price {\n            regularPrice {\n                amount {\n                    currency\n                    value\n                }\n            }\n        }\n        small_image {\n            url\n        }\n        description {\n            html\n        }\n        short_description {\n            html\n        }\n        media_gallery {\n            label\n            position\n            disabled\n            url\n        }\n        ... on ConfigurableProduct {\n            configurable_options {\n                attribute_code\n                attribute_id\n                uid\n                label\n                values {\n                    uid\n                    default_label\n                    label\n                    store_label\n                    use_default_value\n                    value_index\n                    swatch_data {\n                        ... on ImageSwatchData {\n                            thumbnail\n                        }\n                        value\n                    }\n                }\n            }\n        }\n    }\n":
        types.ProductDetailsFragmentFragmentDoc,
    "\n    fragment CategoryFragment on CategoryTree {\n        uid\n        meta_title\n        meta_keywords\n        meta_description\n    }\n":
        types.CategoryFragmentFragmentDoc,
    "\n    fragment ProductsFragment on Products {\n        items {\n            uid\n            name\n            price_range {\n                maximum_price {\n                    final_price {\n                        currency\n                        value\n                    }\n                    regular_price {\n                        currency\n                        value\n                    }\n                    discount {\n                        amount_off\n                    }\n                }\n            }\n            sku\n            small_image {\n                label\n                url\n            }\n            stock_status\n            rating_summary\n            __typename\n            url_key\n        }\n        page_info {\n            total_pages\n        }\n        total_count\n    }\n":
        types.ProductsFragmentFragmentDoc,
    "\n    query GetProductsByCategoryDocument(\n        $id: String!\n        $pageSize: Int!\n        $currentPage: Int!\n        $filters: ProductAttributeFilterInput!\n        $sort: ProductAttributeSortInput\n    ) {\n        categories(filters: { category_uid: { in: [$id] } }) {\n            items {\n                ...CategoryFragment\n            }\n        }\n        products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters, sort: $sort) {\n            ...ProductsFragment\n        }\n    }\n":
        types.GetProductsByCategoryDocumentDocument,
    "\n    query getProductFiltersByCategory($categoryIdFilter: FilterEqualTypeInput!) {\n        products(filter: { category_uid: $categoryIdFilter }) {\n            aggregations {\n                label\n                count\n                attribute_code\n                options {\n                    label\n                    value\n                }\n                position\n            }\n        }\n    }\n":
        types.GetProductFiltersByCategoryDocument,
    "\n    query GetRouteInfo($url: String!) {\n        route(url: $url) {\n            type\n\n            ... on CmsPage {\n                identifier\n            }\n\n            ... on ProductInterface {\n                __typename\n                uid\n            }\n\n            ... on CategoryInterface {\n                __typename\n                uid\n            }\n        }\n    }\n":
        types.GetRouteInfoDocument,
    "\n    query GetStoreConfig {\n        storeConfig {\n            # for header\n            welcome\n\n            #store config\n            store_code\n            store_name\n            store_group_name\n            category_url_suffix\n\n            # for footer\n            copyright\n        }\n    }\n":
        types.GetStoreConfigDocument,
    "\n    query GetAvailableStores($useCurrentGroup: Boolean = true) {\n        availableStores(useCurrentGroup: $useCurrentGroup) {\n            default_display_currency_code\n            locale\n            secure_base_media_url\n            store_code\n            store_group_code\n            store_group_name\n            store_name\n            store_sort_order\n        }\n    }\n":
        types.GetAvailableStoresDocument,
    "\n    query GetPageSize {\n        storeConfig {\n            grid_per_page\n            grid_per_page_values\n        }\n    }\n":
        types.GetPageSizeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    mutation CreateEmptyCartMutation {\n        createEmptyCart\n    }\n",
): (typeof documents)["\n    mutation CreateEmptyCartMutation {\n        createEmptyCart\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetBreadcrumbs($uid: String!) {\n        categories(filters: { category_uid: { in: [$uid] } }) {\n            items {\n                breadcrumbs {\n                    category_uid\n                    # We may not need level if `breadcrumbs` is sorted.\n                    category_level\n                    category_name\n                    category_url_path\n                }\n                uid\n                name\n                url_path\n            }\n        }\n    }\n",
): (typeof documents)["\n    query GetBreadcrumbs($uid: String!) {\n        categories(filters: { category_uid: { in: [$uid] } }) {\n            items {\n                breadcrumbs {\n                    category_uid\n                    # We may not need level if `breadcrumbs` is sorted.\n                    category_level\n                    category_name\n                    category_url_path\n                }\n                uid\n                name\n                url_path\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetCategorySortMethods($uid: String!) {\n        products(filter: { category_uid: { eq: $uid } }) {\n            sort_fields {\n                default\n                options {\n                    label\n                    value\n                }\n            }\n        }\n    }\n",
): (typeof documents)["\n    query GetCategorySortMethods($uid: String!) {\n        products(filter: { category_uid: { eq: $uid } }) {\n            sort_fields {\n                default\n                options {\n                    label\n                    value\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetMegaMenuCategories {\n        categories {\n            items {\n                uid\n                name\n                children {\n                    uid\n                    include_in_menu\n                    name\n                    position\n                    url_key\n                    url_path\n                    children {\n                        uid\n                        include_in_menu\n                        name\n                        position\n                        url_key\n                        url_path\n                        children {\n                            uid\n                            include_in_menu\n                            name\n                            position\n                            url_key\n                            url_path\n                            children {\n                                uid\n                                include_in_menu\n                                name\n                                position\n                                url_key\n                                url_path\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n",
): (typeof documents)["\n    query GetMegaMenuCategories {\n        categories {\n            items {\n                uid\n                name\n                children {\n                    uid\n                    include_in_menu\n                    name\n                    position\n                    url_key\n                    url_path\n                    children {\n                        uid\n                        include_in_menu\n                        name\n                        position\n                        url_key\n                        url_path\n                        children {\n                            uid\n                            include_in_menu\n                            name\n                            position\n                            url_key\n                            url_path\n                            children {\n                                uid\n                                include_in_menu\n                                name\n                                position\n                                url_key\n                                url_path\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetCmsBlocks($identifiers: [String]) {\n        cmsBlocks(identifiers: $identifiers) {\n            items {\n                identifier\n                title\n                content\n            }\n        }\n    }\n",
): (typeof documents)["\n    query GetCmsBlocks($identifiers: [String]) {\n        cmsBlocks(identifiers: $identifiers) {\n            items {\n                identifier\n                title\n                content\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetGurrency {\n        currency {\n            default_display_currency_code\n            available_currency_codes\n        }\n    }\n",
): (typeof documents)["\n    query GetGurrency {\n        currency {\n            default_display_currency_code\n            available_currency_codes\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query getProductDetailForProductPage($urlKey: String!) {\n        products(filter: { url_key: { eq: $urlKey } }) {\n            items {\n                id\n                uid\n                ...ProductDetailsFragment\n            }\n        }\n    }\n",
): (typeof documents)["\n    query getProductDetailForProductPage($urlKey: String!) {\n        products(filter: { url_key: { eq: $urlKey } }) {\n            items {\n                id\n                uid\n                ...ProductDetailsFragment\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    fragment ProductDetailsFragment on ProductInterface {\n        id\n        uid\n        __typename\n        meta_title\n        meta_keyword\n        meta_description\n        categories {\n            uid\n            breadcrumbs {\n                category_uid\n            }\n        }\n        sku\n        name\n        price {\n            regularPrice {\n                amount {\n                    currency\n                    value\n                }\n            }\n        }\n        small_image {\n            url\n        }\n        description {\n            html\n        }\n        short_description {\n            html\n        }\n        media_gallery {\n            label\n            position\n            disabled\n            url\n        }\n        ... on ConfigurableProduct {\n            configurable_options {\n                attribute_code\n                attribute_id\n                uid\n                label\n                values {\n                    uid\n                    default_label\n                    label\n                    store_label\n                    use_default_value\n                    value_index\n                    swatch_data {\n                        ... on ImageSwatchData {\n                            thumbnail\n                        }\n                        value\n                    }\n                }\n            }\n        }\n    }\n",
): (typeof documents)["\n    fragment ProductDetailsFragment on ProductInterface {\n        id\n        uid\n        __typename\n        meta_title\n        meta_keyword\n        meta_description\n        categories {\n            uid\n            breadcrumbs {\n                category_uid\n            }\n        }\n        sku\n        name\n        price {\n            regularPrice {\n                amount {\n                    currency\n                    value\n                }\n            }\n        }\n        small_image {\n            url\n        }\n        description {\n            html\n        }\n        short_description {\n            html\n        }\n        media_gallery {\n            label\n            position\n            disabled\n            url\n        }\n        ... on ConfigurableProduct {\n            configurable_options {\n                attribute_code\n                attribute_id\n                uid\n                label\n                values {\n                    uid\n                    default_label\n                    label\n                    store_label\n                    use_default_value\n                    value_index\n                    swatch_data {\n                        ... on ImageSwatchData {\n                            thumbnail\n                        }\n                        value\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    fragment CategoryFragment on CategoryTree {\n        uid\n        meta_title\n        meta_keywords\n        meta_description\n    }\n",
): (typeof documents)["\n    fragment CategoryFragment on CategoryTree {\n        uid\n        meta_title\n        meta_keywords\n        meta_description\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    fragment ProductsFragment on Products {\n        items {\n            uid\n            name\n            price_range {\n                maximum_price {\n                    final_price {\n                        currency\n                        value\n                    }\n                    regular_price {\n                        currency\n                        value\n                    }\n                    discount {\n                        amount_off\n                    }\n                }\n            }\n            sku\n            small_image {\n                label\n                url\n            }\n            stock_status\n            rating_summary\n            __typename\n            url_key\n        }\n        page_info {\n            total_pages\n        }\n        total_count\n    }\n",
): (typeof documents)["\n    fragment ProductsFragment on Products {\n        items {\n            uid\n            name\n            price_range {\n                maximum_price {\n                    final_price {\n                        currency\n                        value\n                    }\n                    regular_price {\n                        currency\n                        value\n                    }\n                    discount {\n                        amount_off\n                    }\n                }\n            }\n            sku\n            small_image {\n                label\n                url\n            }\n            stock_status\n            rating_summary\n            __typename\n            url_key\n        }\n        page_info {\n            total_pages\n        }\n        total_count\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetProductsByCategoryDocument(\n        $id: String!\n        $pageSize: Int!\n        $currentPage: Int!\n        $filters: ProductAttributeFilterInput!\n        $sort: ProductAttributeSortInput\n    ) {\n        categories(filters: { category_uid: { in: [$id] } }) {\n            items {\n                ...CategoryFragment\n            }\n        }\n        products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters, sort: $sort) {\n            ...ProductsFragment\n        }\n    }\n",
): (typeof documents)["\n    query GetProductsByCategoryDocument(\n        $id: String!\n        $pageSize: Int!\n        $currentPage: Int!\n        $filters: ProductAttributeFilterInput!\n        $sort: ProductAttributeSortInput\n    ) {\n        categories(filters: { category_uid: { in: [$id] } }) {\n            items {\n                ...CategoryFragment\n            }\n        }\n        products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters, sort: $sort) {\n            ...ProductsFragment\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query getProductFiltersByCategory($categoryIdFilter: FilterEqualTypeInput!) {\n        products(filter: { category_uid: $categoryIdFilter }) {\n            aggregations {\n                label\n                count\n                attribute_code\n                options {\n                    label\n                    value\n                }\n                position\n            }\n        }\n    }\n",
): (typeof documents)["\n    query getProductFiltersByCategory($categoryIdFilter: FilterEqualTypeInput!) {\n        products(filter: { category_uid: $categoryIdFilter }) {\n            aggregations {\n                label\n                count\n                attribute_code\n                options {\n                    label\n                    value\n                }\n                position\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetRouteInfo($url: String!) {\n        route(url: $url) {\n            type\n\n            ... on CmsPage {\n                identifier\n            }\n\n            ... on ProductInterface {\n                __typename\n                uid\n            }\n\n            ... on CategoryInterface {\n                __typename\n                uid\n            }\n        }\n    }\n",
): (typeof documents)["\n    query GetRouteInfo($url: String!) {\n        route(url: $url) {\n            type\n\n            ... on CmsPage {\n                identifier\n            }\n\n            ... on ProductInterface {\n                __typename\n                uid\n            }\n\n            ... on CategoryInterface {\n                __typename\n                uid\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetStoreConfig {\n        storeConfig {\n            # for header\n            welcome\n\n            #store config\n            store_code\n            store_name\n            store_group_name\n            category_url_suffix\n\n            # for footer\n            copyright\n        }\n    }\n",
): (typeof documents)["\n    query GetStoreConfig {\n        storeConfig {\n            # for header\n            welcome\n\n            #store config\n            store_code\n            store_name\n            store_group_name\n            category_url_suffix\n\n            # for footer\n            copyright\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetAvailableStores($useCurrentGroup: Boolean = true) {\n        availableStores(useCurrentGroup: $useCurrentGroup) {\n            default_display_currency_code\n            locale\n            secure_base_media_url\n            store_code\n            store_group_code\n            store_group_name\n            store_name\n            store_sort_order\n        }\n    }\n",
): (typeof documents)["\n    query GetAvailableStores($useCurrentGroup: Boolean = true) {\n        availableStores(useCurrentGroup: $useCurrentGroup) {\n            default_display_currency_code\n            locale\n            secure_base_media_url\n            store_code\n            store_group_code\n            store_group_name\n            store_name\n            store_sort_order\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "\n    query GetPageSize {\n        storeConfig {\n            grid_per_page\n            grid_per_page_values\n        }\n    }\n",
): (typeof documents)["\n    query GetPageSize {\n        storeConfig {\n            grid_per_page\n            grid_per_page_values\n        }\n    }\n"];

export function graphql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
