'use client';

import { GetProductsByCategoryDocument, GraphQLClient } from "@fuschia/graphql";
import { useEffect } from "react";

const client = new GraphQLClient("https://magento-pwa-gm7h5.local.pwadev:8561", {
    method: "GET",
    jsonSerializer: {
        parse: JSON.parse,
        stringify: JSON.stringify,
    },
})

export function Tester() {
    useEffect(() => {
        (async () => {
            const things = client.request(GetProductsByCategoryDocument, { 
            id: "MTU=",
            pageSize: 12,
            currentPage: 1,
            // figure these out later
            filters: {
                category_uid: { eq: "MTU="}
            } as unknown as any,
            sort: { position: "ASC" } as unknown as any,
            } as any)
        })()
    }, [])

    return <div></div>
}
