import { graphql } from "../__generated__";

export const GetProductDetailsDocument = graphql(/* GraphQL */ `
    query getProductDetailForProductPage($urlKey: String!) {
        products(filter: { url_key: { eq: $urlKey } }) {
            items {
                id
                uid
                ...ProductDetailsFragment
            }
        }
    }
`);

export const ProductDetailsFragment = graphql(/* GraphQL */ `
    fragment ProductDetailsFragment on ProductInterface {
        id
        uid
        __typename
        meta_title
        meta_keyword
        meta_description
        categories {
            uid
            breadcrumbs {
                category_uid
            }
        }
        sku
        name
        price {
            regularPrice {
                amount {
                    currency
                    value
                }
            }
        }
        small_image {
            url
        }
        description {
            html
        }
        short_description {
            html
        }
        media_gallery {
            label
            position
            disabled
            url
        }
        ... on ConfigurableProduct {
            configurable_options {
                attribute_code
                attribute_id
                uid
                label
                values {
                    uid
                    default_label
                    label
                    store_label
                    use_default_value
                    value_index
                    swatch_data {
                        ... on ImageSwatchData {
                            thumbnail
                        }
                        value
                    }
                }
            }
        }
    }
`);
