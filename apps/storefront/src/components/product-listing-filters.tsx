import { PlusIcon } from "@heroicons/react/20/solid";
import { graphqlClient } from "../utils";
import { GetProductFiltersByCategoryDocument } from "@fuschia/graphql";

const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "beige", label: "Beige" },
            { value: "blue", label: "Blue" },
            { value: "brown", label: "Brown" },
            { value: "green", label: "Green" },
            { value: "purple", label: "Purple" },
        ],
    },
    {
        id: "category",
        name: "Category",
        options: [
            { value: "new-arrivals", label: "All New Arrivals" },
            { value: "tees", label: "Tees" },
            { value: "crewnecks", label: "Crewnecks" },
            { value: "sweatshirts", label: "Sweatshirts" },
            { value: "pants-shorts", label: "Pants & Shorts" },
        ],
    },
    {
        id: "sizes",
        name: "Sizes",
        options: [
            { value: "xs", label: "XS" },
            { value: "s", label: "S" },
            { value: "m", label: "M" },
            { value: "l", label: "L" },
            { value: "xl", label: "XL" },
            { value: "2xl", label: "2XL" },
        ],
    },
];

type ProductListingFiltersProps = {
    categoryUid: string;
};

export async function ProductListingFilters({ categoryUid }: ProductListingFiltersProps) {
    const { products } = await graphqlClient.request(GetProductFiltersByCategoryDocument, {
        categoryIdFilter: { eq: categoryUid, in: [] },
    });

    const filters = products?.aggregations!;



    return (
        <aside>
            <h2 className="sr-only">Filters</h2>

            <button
                type="button"
                className="inline-flex items-center lg:hidden"
                //   onClick={() => setMobileFiltersOpen(true)}
            >
                <span className="text-sm font-medium text-gray-700">Filters</span>
                <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            </button>

            <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                    {filters.map((section, sectionIdx) => (
                        <div key={section?.label} className={sectionIdx === 0 ? undefined : "pt-10"}>
                            <fieldset>
                                <legend className="block text-sm font-medium text-gray-900">{section?.label}</legend>
                                <div className="space-y-3 pt-6">
                                    {section?.options!.map((option, optionIdx) => (
                                        <div key={option?.value} className="flex items-center">
                                            <input
                                                id={`${section.attribute_code}-${optionIdx}`}
                                                name={`${section.attribute_code}[]`}
                                                defaultValue={option?.value}
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                htmlFor={`${section.attribute_code}-${optionIdx}`}
                                                className="ml-3 text-sm text-gray-600"
                                            >
                                                {option?.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                    ))}
                </form>
            </div>
        </aside>
    );
}
