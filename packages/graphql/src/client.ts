import { GraphQLClient } from "graphql-request";

export const graphqlClient = (url: string) => {
    return new GraphQLClient(url);
}
