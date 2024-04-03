import { graphql } from "../__generated__";

export const GetRouteInfoDocument = graphql(/* GraphQL */ `
    query GetRouteInfo($url: String!) {
        route(url: $url) {
            type

            ... on CmsPage {
                identifier
            }

            ... on ProductInterface {
                __typename
                uid
            }

            ... on CategoryInterface {
                __typename
                uid
            }
        }
    }
`);
