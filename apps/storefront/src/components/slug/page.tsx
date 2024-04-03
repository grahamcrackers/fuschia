import {
    GetMegaMenuCategoriesQuery,
    GetMegaMenuDocument,
    GetPageSizeDocument,
    GetProductFiltersByCategoryDocument,
    GetProductsByCategoryDocument,
    ProductsFragment,
    useFragment,
} from "@fuschia/graphql";
import { getClient, graphqlClient, mapCategories } from "../../utils";

import { flatMapDeep } from "lodash";
import { flattenCategories } from "../../utils/category.utils";
import {
    GetProductsByCategoryDocumentQueryVariables,
    ProductAttributeFilterInput,
} from "../../../../../packages/graphql/src/__generated__/graphql";
import { ProductListing } from "../product-listing";
import { Breadcrumbs } from "../breadcrumbs";
import { ProductFilters } from "../product-filters";

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

type Params = {
    slug: string[];
};

type PageProps<T> = {
    params: T;
};

export default async function Page({ params, ...props }: PageProps<Params>) {
    // @ts-ignore why did typescript make accessing so complicated
    const category = await getCategoryForPage(params.slug[params.slug.length - 1]);
    const page = await getPagination();

    const { products } = await getClient.request(GetProductsByCategoryDocument, {
        id: category?.uid!,
        pageSize: page.size ?? 12,
        currentPage: 1,
        filters: {
            "category_uid": { "eq": category?.uid! }
        },
        sort: { position: "ASC" },
    } as any);

    // if no products
    // TODO: something
    
    return (
        <>
            {/* <Breadcrumbs category={category!}/> */}
            {/* <ProductListing category={category!} products={products!}/> */}
            {/* <ProductFilters /> */}
        </>
    );
}
