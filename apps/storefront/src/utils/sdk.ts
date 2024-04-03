import { MagentoSDK } from "../sdk";
import { graphqlClient } from "./graphql-client";

export const sdk = new MagentoSDK(graphqlClient);


