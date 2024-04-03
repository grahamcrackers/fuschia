import { createMap, createMapper, forMember, mapFrom } from "@automapper/core";
import { pojos } from "@automapper/pojos";
import { createProductDetailsMetadata, ProductDetailsDTO, ProductType } from "./product-details.dto";
import { GetProductDetailForProductPageQuery } from "../../../../packages/graphql/src/__generated__/graphql";
import { ProductDetailsFragment, useFragment } from "@fuschia/graphql";

createProductDetailsMetadata();

export const mapper = createMapper({
    strategyInitializer: pojos(),
});

createMap<GetProductDetailForProductPageQuery, ProductDetailsDTO>(
    mapper,
    "GetProductDetailForProductPageQuery",
    "ProductDetailsDTO",
    forMember(
        (destination) => destination,
        mapFrom((source) => {

        })
    ),
    forMember(
        (destination) => destination.meta,
        mapFrom((source) => {
            const details = useFragment(ProductDetailsFragment, source.products?.items![0]);

            console.log(details);
            return {
                title: details?.meta_title ?? "",
                keyword: details?.meta_keyword ?? "",
                description: details?.meta_description ?? "",
            };
        }),
    ),
);

export const mapProductDetails = (source: GetProductDetailForProductPageQuery): ProductDetailsDTO => {
    const details = useFragment(ProductDetailsFragment, source.products?.items![0]);

    return {
        id: details?.id!,
        uid: details?.uid!,
        type: details?.__typename.replace(/Product/, '') as ProductType,
        meta: {
            title: details?.meta_title!,
            keyword: details?.meta_keyword!,
            description: details?.meta_description!,
        }

    }
}
