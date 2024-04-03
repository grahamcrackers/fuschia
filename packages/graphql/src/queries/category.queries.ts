import { graphql } from "../__generated__";

// export const NavItemFragment = graphql(/* GraphQL */ `
//     fragment NavItem on CategoryTree {
//         uid
//         include_in_menu
//         name
//         position
//         url_path
//     }
// `);

export const GetMegaMenuDocument = graphql(/* GraphQL */ `
    query GetMegaMenuCategories {
        categories {
            items {
                uid
                name
                children {
                    uid
                    include_in_menu
                    name
                    position
                    url_key
                    url_path
                    children {
                        uid
                        include_in_menu
                        name
                        position
                        url_key
                        url_path
                        children {
                            uid
                            include_in_menu
                            name
                            position
                            url_key
                            url_path
                            children {
                                uid
                                include_in_menu
                                name
                                position
                                url_key
                                url_path
                            }
                        }
                    }
                }
            }
        }
    }
`);
