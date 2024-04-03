import { GetProductDetailsDocument, GraphQLClient } from "@fuschia/graphql";
import { mapper, mapProductDetails } from "../dtos";
import { ProductDetailsDTO } from "../dtos/product-details.dto";
import { GetProductDetailForProductPageQuery } from "../../../../packages/graphql/src/__generated__/graphql";

/**
 * A wrapper around the magento graphql library that handles queries, mutations, errors, and cleaning up objects from the graphql requests.
 *
 * This should probably go in either the graphql package or create a seperate one for it
 */
export class MagentoSDK {
    constructor(public readonly client: GraphQLClient) {}

    // TODO: pass in by either urlKey or uid
    async getProductDetails(urlKey: string) {
        const response = await this.client.request(GetProductDetailsDocument, { urlKey });

        const pojo = mapper.map<GetProductDetailForProductPageQuery, ProductDetailsDTO>(
            response,
            "GetProductDetailForProductPageQuery",
            "ProductDetailsDTO",
        );

        console.log(pojo);

        const mapped = mapProductDetails(response);

        return mapped;
    }
}
