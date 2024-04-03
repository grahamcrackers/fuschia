# Notes

-   This is using the docker image from (Mark Shust's docker-magento repo)[https://github.com/markshust/docker-magento]. Installing data solutions modules and live search modules seems to be messing up the graphql queries when we try to query the frontend store.
-   I'm not sure if going through the pwa setup is actually needed yet, but here we are.
-   Filtering by category_uid doesn't seem to work, but category_id does? ahhhhhhhhhh

-   eslint seems to be broken unless we put the folder names in the the .vscode/settings.json file ????
-   The PWA studio upward-js server is the go between of the luma graphql/rest endpoints....

    -   and it's confusing to understand

-   Live Search results go through the api mesh layer to get results.

# Displaying Products

-   I can only get the product information on each page through a GET call, is this because Live Search is installed?

install this version `dev-2.4-develop`

-   Disable 2FA by installing this module
    -   https://github.com/markshust/magento2-module-disabletwofactorauth

## Storefront

A storefront can have three different routes (PRODUCT, CATEGORY, or CMS_PAGE, see GetRouteInfoDocument)

1st phase browse store and checkout as a guest

## Basic Structure

-   home page
    -   layout
        -   navigation
        -   mega menu
        -   cart
    -   category (CMS_PAGE with Luma)
        -   category page
            -   sub-category page (etc...)
    -   account
        -   create
        -   login
