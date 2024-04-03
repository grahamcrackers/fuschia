import { graphql } from "../__generated__";

export const GetCurrencyDocument = graphql(/* GraphQL */ `
    query GetGurrency {
        currency {
            default_display_currency_code
            available_currency_codes
        }
    }
`);
