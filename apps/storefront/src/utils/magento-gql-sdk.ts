import { GraphQLClient } from "@fuschia/graphql";

/**
 * A helper sdk around the magento graphql client. Allows us to manipulate the
 * graphql responses and generate custom errors all in one place.
 */
export class MagentoClientSdk {
    constructor(client: GraphQLClient){}
}
