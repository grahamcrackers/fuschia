import { graphql } from "../__generated__";

export const CategoryFragment = graphql(/* GraphQL */ `
    fragment CategoryFragment on CategoryTree {
        uid
        meta_title
        meta_keywords
        meta_description
    }
`);

export const ProductsFragment = graphql(/* GraphQL */ `
    fragment ProductsFragment on Products {
        items {
            uid
            name
            price_range {
                maximum_price {
                    final_price {
                        currency
                        value
                    }
                    regular_price {
                        currency
                        value
                    }
                    discount {
                        amount_off
                    }
                }
            }
            sku
            small_image {
                label
                url
            }
            stock_status
            rating_summary
            __typename
            url_key
        }
        page_info {
            total_pages
        }
        total_count
    }
`);

export const GetProductsByCategoryDocument = graphql(/* GraphQL */ `
    query GetProductsByCategoryDocument(
        $id: String!
        $pageSize: Int!
        $currentPage: Int!
        $filters: ProductAttributeFilterInput!
        $sort: ProductAttributeSortInput
    ) {
        categories(filters: { category_uid: { in: [$id] } }) {
            items {
                ...CategoryFragment
            }
        }
        products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters, sort: $sort) {
            ...ProductsFragment
        }
    }
`);

export const GetProductFiltersByCategoryDocument = graphql(/* GraphQL */ `
    query getProductFiltersByCategory($categoryIdFilter: FilterEqualTypeInput!) {
        products(filter: { category_uid: $categoryIdFilter }) {
            aggregations {
                label
                count
                attribute_code
                options {
                    label
                    value
                }
                position
            }
        }
    }
`);
