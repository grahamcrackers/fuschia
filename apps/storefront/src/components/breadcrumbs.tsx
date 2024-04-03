import { GetBreadcrumbsDocument } from "@fuschia/graphql";
import { Category, graphqlClient } from "../utils";

const breadcrumbs = [{ id: 1, name: "Men", href: "#" }];

export type BreadcrumbsProps = {
    category: Category
}

/**
 * Breadcrumbs
 * - server component
 */
export async function Breadcrumbs({ category }: BreadcrumbsProps) {
    // TODO: clean up mappings
    const { categories } = await graphqlClient.request(GetBreadcrumbsDocument, { uid: category.uid })

    const breadcrumbs = categories?.items![0]?.breadcrumbs;
    const { name, url_path } = categories?.items![0] as { url_path: string; name: string; }

    return (
        <div className="border-b border-gray-200">
            <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ol role="list" className="flex items-center space-x-4 py-4">
                    {breadcrumbs?.map((breadcrumb) => (
                        <li key={breadcrumb?.category_uid}>
                            <div className="flex items-center">
                                <a href={"/" + breadcrumb?.category_url_path!} className="mr-4 text-sm font-medium text-gray-900">
                                    {breadcrumb?.category_name}
                                </a>
                                <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                                    <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                                </svg>
                            </div>
                        </li>
                    ))}
                    <li className="text-sm">
                        <a href={"/" + url_path!} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                            {name}
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    );
}
