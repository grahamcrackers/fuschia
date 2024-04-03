import { graphql } from "../__generated__";

export const GetBreadcrumbsDocument = graphql(/* GraphQL */ `
    query GetBreadcrumbs($uid: String!) {
        categories(filters: { category_uid: { in: [$uid] } }) {
            items {
                breadcrumbs {
                    category_uid
                    # We may not need level if \`breadcrumbs\` is sorted.
                    category_level
                    category_name
                    category_url_path
                }
                uid
                name
                url_path
            }
        }
    }
`);
