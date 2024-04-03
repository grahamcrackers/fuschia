# Magento Fuschia

A headless storefront based on [Magento / Adobe Commerce](magento)'s graphql endpoints, [Nextjs](nextjs), and [TailwindCSS](tailwlind). This project basically came from a need to have an easier development environment to test some of the feature development for Adobe Commerce and making sure that headless features are supported.

> [!WARNING] > **This project _IS NOT_ production ready.** I'm not sure that it will ever be. This is mainly a development playground for a magento graphql backend and nextjs storefront.

## Setting Up This Project

### Prerequisites

-   A Magento Store
    -   The easiest way to get started is to follow [Mark Shust's/docker-magento](https://github.com/markshust/docker-magento) setup to get a basic store set up. Following the links in his README will have a mageto store setup up very quickly on docker containers and the store populated with the sample data luma products.
-   Knowledge of Typescript, React, NextJS, CSS, and ideally experience with TailwindCSS.
-   Helps to have some experience with Docker

### Setting Up the Storefront

Right now there isn't much else to the storefront besides connecting to the graphql endpoint.

Copy the .env.example file to .env

```bash
cp .env.example .env
```

paste your magento store url into the `.env` file. I named my store `magento-next.test`

```bash
MAGENTO_GRAPHQL_URL=https://magento-next.test/graphql
```

make sure you have your magento store running in docker and in the root of this project run

```bash
yarn dev
```

This should spin up a storefront at `http://localhost:3000` and a docs site (not currently used) at `http://localhost:3001`.

### How does this differ from PWA Studio

PWA Studio is a client side app built from custom tools and complicated logic and names. There is some overlap on features and I'm reusing what I can. Using Nextjs allows us to render components server side, taking some of the strain off the client and making authentication inherently more secure.

## Goals

-   Everything built with open source tools and
-   Recreate a Magento storefront with a truly headless implementation
-   Easy eventing analytics baked in
    -   Adobe Analytics
    -   Snowplow
    -   Google
    -   Matomo
-   Deployment on Docker for easy replacement for existing Magento Customers.
-   (Maybe?) Deployment on Vercel to take advantage of Vercel's infrastructure.

[magento]: https://business.adobe.com/products/magento/magento-commerce.html
[nextjs]: https://nextjs.org/
[tailwind]: https://tailwindcss.com/
[pwa-docs]: https://developer.adobe.com/commerce/pwa-studio/
[adobe-analytics]: https://business.adobe.com/products/analytics/adobe-analytics.html
[snowplow]: https://snowplow.io/
[google-analytics]: https://marketingplatform.google.com/about/analytics/
[matomo]: https://matomo.org/
