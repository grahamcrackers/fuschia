import { graphql } from "../__generated__";

export const GetCmsBlocksDocument = graphql(/* GraphQL */ `
    query GetCmsBlocks($identifiers: [String]) {
        cmsBlocks(identifiers: $identifiers) {
            items {
                identifier
                title
                content
            }
        }
    }
`);
