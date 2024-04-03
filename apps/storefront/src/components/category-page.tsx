import {
    GetCmsBlocksDocument,
    GetMegaMenuCategoriesQuery,
    GetMegaMenuDocument,
    GetPageSizeDocument,
    GetProductFiltersByCategoryDocument,
    GetProductsByCategoryDocument,
    ProductsFragment,
    useFragment,
} from "@fuschia/graphql";
import { graphqlClient, mapCategories } from "../utils";

import { flatMapDeep } from "lodash";
import { Category, flattenCategories } from "../utils/category.utils";
import {
    GetProductsByCategoryDocumentQueryVariables,
    ProductAttributeFilterInput,
} from "../../../../packages/graphql/src/__generated__/graphql";
import { ProductListing } from "./product-listing";
import { Breadcrumbs } from "./breadcrumbs";
import { ProductFilters } from "./product-filters";

const getCategoryForPage = async (page: string) => {
    const { categories } = await graphqlClient.request(GetMegaMenuDocument);

    const categoriesArr = flattenCategories({ categories });
    const categoryMap = mapCategories(categoriesArr, "url_key");
    return categoryMap[page];
};

const getPagination = async () => {
    const { storeConfig } = await graphqlClient.request(GetPageSizeDocument);

    return {
        size: storeConfig?.grid_per_page,
        values: storeConfig?.grid_per_page_values?.split(","),
    };
};

type CategoryPageProps = {
    slug: string[];
};

/* 
    Note: Every 1st category seems to be a "CATEGORY" page but consists of CMS blocks.
    I can't seem to get block identifiers by a route url (could write an extension), but for 
    now, we can assume every cms block page follows the same structure.
    <category>-left-menu-block, <category>-block
*/

export async function CategoryCmsPage({ category }: { category: string }) {
    const menuBlock = `${category}-left-menu-block`;
    const pageBlock = `${category}-block`;

    const { cmsBlocks: blocks } = await graphqlClient.request(GetCmsBlocksDocument, {
        identifiers: [menuBlock, pageBlock],
    });

    const menuItem = blocks?.items?.find((block) => block?.identifier === menuBlock);
    const pageItem = blocks?.items?.find((block) => block?.identifier === pageBlock);

    return (
        <main id="maincontent" className="cms-blocks page-main">
            {menuItem?.content && (
                <aside
                    className="widget block block-static-block"
                    dangerouslySetInnerHTML={{ __html: menuItem.content }}
                />
            )}

            {pageItem?.content && (
                <div
                    className="widget block block-static-block"
                    dangerouslySetInnerHTML={{ __html: pageItem.content }}
                />
            )}
        </main>
    );
}

export default async function CategoryPage({ slug }: CategoryPageProps) {
    // @ts-ignore why did typescript make accessing so complicated
    const category = await getCategoryForPage(slug[slug.length - 1]);
    const page = await getPagination();

    const { products } = await graphqlClient.request(GetProductsByCategoryDocument, {
        id: category?.uid!,
        pageSize: page.size ?? 12,
        currentPage: 1,
        filters: {
            category_uid: { eq: category?.uid! },
        },
        sort: { position: "ASC" },
    } as any);

    const categoryProducts = useFragment(ProductsFragment, products);

    // if no products
    // TODO: something

    return (
        <>
            <Breadcrumbs category={category!} />
            {slug.length === 1 && categoryProducts?.total_count === 0 ? (
                <CategoryCmsPage category={category?.url_key!} />
            ) : (
                <ProductListing category={category!} products={products!} />
            )}
        </>
    );
}
