import { graphql } from "../__generated__";

export const GetStoreConfigDocument = graphql(/* GraphQL */ `
    query GetStoreConfig {
        storeConfig {
            # for header
            welcome

            #store config
            store_code
            store_name
            store_group_name
            category_url_suffix

            # for footer
            copyright
        }
    }
`);

export const GetAvailableStoresDocument = graphql(/* GraphQL */ `
    query GetAvailableStores($useCurrentGroup: Boolean = true) {
        availableStores(useCurrentGroup: $useCurrentGroup) {
            default_display_currency_code
            locale
            secure_base_media_url
            store_code
            store_group_code
            store_group_name
            store_name
            store_sort_order
        }
    }
`);

export const GetPageSizeDocument = graphql(/* GraphQL */ `
    query GetPageSize {
        storeConfig {
            grid_per_page
            grid_per_page_values
        }
    }
`);
