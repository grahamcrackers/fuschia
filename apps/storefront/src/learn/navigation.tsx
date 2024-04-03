import { GetMegaMenuDocument } from "@fuschia/graphql";
import { graphqlClient } from "../utils";
import Link from "next/link";
import { GetProductsByCategoryDocument, GraphQLClient } from "@fuschia/graphql";

export async function Navigation() {
    const { categories } = await graphqlClient.request(GetMegaMenuDocument);

    // const things = await client.request(GetProductsByCategoryDocument, {
    //     id: "MTU=",
    //     pageSize: 12,
    //     currentPage: 1,
    //     // figure these out later
    //     filters: {
    //         category_uid: { eq: "MTU=" }
    //     } as unknown as any,
    //     sort: { position: "ASC" } as unknown as any,
    //     } as any)

    // console.log(things);

    return (
        <ul>
            {categories?.items![0]?.children?.map((child) => (
                <li key={child?.uid}>
                    <Link href={{ pathname: "/" + child?.url_path! }}>{child?.name}</Link>
                    <ul className="ml-5">
                        {child?.children?.map((child) => (
                            <li key={child?.uid}>
                               <Link href={{ pathname: "/" + child?.url_path! }}>{child?.name}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}
