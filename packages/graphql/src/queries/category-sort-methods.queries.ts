import { graphql } from "../__generated__";

export const GetCategorySortMethods = graphql(/* GraphQL */ `
    query GetCategorySortMethods($uid: String!) {
        products(filter: { category_uid: { eq: $uid } }) {
            sort_fields {
                default
                options {
                    label
                    value
                }
            }
        }
    }
`);
