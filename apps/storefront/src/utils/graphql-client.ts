import { GraphQLClient } from "@fuschia/graphql";

export const graphqlClient = new GraphQLClient(process.env.MAGENTO_GRAPHQL_URL as string);
