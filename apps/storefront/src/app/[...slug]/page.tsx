import {
    GetMegaMenuDocument,
    GetPageSizeDocument,
    GetProductDetailsDocument,
    GetRouteInfoDocument,
    GetStoreConfigDocument,
    ProductDetailsFragment,
    useFragment
} from "@fuschia/graphql";
import { graphqlClient, mapCategories } from "../../utils";

import { notFound } from "next/navigation";
import {
    UrlRewriteEntityTypeEnum
} from "../../../../../packages/graphql/src/__generated__/graphql";
import CategoryPage from "../../components/category-page";
import { flattenCategories } from "../../utils/category.utils";
import ProductDetails from "../../components/product-details";
import { sdk } from "../../utils/sdk";

// type Params = {
//     entity: string;
// };

// type PageProps<T> = {
//     params: T;
// };

interface PageProps {
    params: { slug: string[] };
    searchParams: { [key: string]: string | string[] | undefined };
}

const getCategoryForPage = async (page: string) => {
    const { categories } = await graphqlClient.request(GetMegaMenuDocument);

    const categoriesArr = flattenCategories({ categories });
    const categoryMap = mapCategories(categoriesArr, "url_path");
    return categoryMap[page];
};

const getPagination = async () => {
    const { storeConfig } = await graphqlClient.request(GetPageSizeDocument);

    return {
        size: storeConfig?.grid_per_page,
        values: storeConfig?.grid_per_page_values?.split(","),
    };
};

export default async function Page({ params, ...props }: PageProps) {
    const { storeConfig } = await graphqlClient.request(GetStoreConfigDocument);
    const { route } = await graphqlClient.request(GetRouteInfoDocument, { 
        url: params.slug.join("/") + storeConfig?.category_url_suffix!
    });

    switch(route?.type as UrlRewriteEntityTypeEnum) {
        case "CMS_PAGE":
            return <div>CMS_PAGE Page</div>
        case "CATEGORY":
            return <CategoryPage slug={params.slug} />
        case "PRODUCT":
            const sdkProducts = await sdk.getProductDetails(params.slug[0]!);
            const { products } = await graphqlClient.request(GetProductDetailsDocument, { urlKey: params.slug[0]! });
            return <ProductDetails details={products?.items![0]!}/>
        default:
            return notFound();
    }
    
    // const category = await getCategoryForPage(params.category);
    // const page = await getPagination();

    // const { products: filters } = await graphqlClient.request(GetProductFiltersByCategoryDocument, {
    //     categoryIdFilter: { eq: category?.uid!, in: [] },
    // });

    // // category products won't be here but there are hot sellers, wherever those come from (they come from the cms page)
    // // use an "unreset" class that reverts the styles for any wysiwyg components 

    // return notFound();
}
