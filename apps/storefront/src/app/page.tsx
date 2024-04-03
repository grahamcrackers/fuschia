import { GetCmsBlocksDocument } from "@fuschia/graphql";
import { graphqlClient } from "../utils";

export default async function Page({}) {
    const {cmsBlocks} = await graphqlClient.request(GetCmsBlocksDocument, { identifiers: ["home-page-block"] })
    
    return (
        <main>
            {/* <h1>Main Page</h1> */}
            
        </main>
    );
}
