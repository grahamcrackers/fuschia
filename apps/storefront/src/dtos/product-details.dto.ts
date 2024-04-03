import { PojosMetadataMap } from "@automapper/pojos";
import { GetProductDetailForProductPageQuery } from "../../../../packages/graphql/src/__generated__/graphql";

type ProductType = "Bundle" | "Configurable" | "Downloadable" | "Grouped" | "Simple" | "Virtual";

export interface ProductDetailsDTO {
    id: number;
    uid: string;
    type?: ProductType;
    meta: {
        title: string;
        keyword: string;
        description: string;
    }
}

export function createProductDetailsMetadata() {
    PojosMetadataMap.create<GetProductDetailForProductPageQuery>('GetProductDetailForProductPageQuery')
    PojosMetadataMap.create<ProductDetailsDTO>('ProductDetailsDTO')
}
