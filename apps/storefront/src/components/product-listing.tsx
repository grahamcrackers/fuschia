import { PlusIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { FragmentType, GetCategorySortMethods, ProductsFragment, useFragment } from "@fuschia/graphql";
import { ProductListingFilters } from "./product-listing-filters";
import { Category, graphqlClient } from "../utils";
import { ProductSortOptions } from "./product-sort-options";
import { ProductListOptions } from "./product-list-options";

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

const products = [
    {
        id: 1,
        name: "Basic Tee 8-Pack",
        href: "#",
        price: "$256",
        description:
            "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
        options: "8 colors",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
        imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 2,
        name: "Basic Tee",
        href: "#",
        price: "$32",
        description: "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
        imageAlt: "Front of plain black t-shirt.",
    },
    // More products...
];

type ProductListingProps = {
    category: Category;
    products: FragmentType<typeof ProductsFragment>;
};

/**
 * Product Listing Page Wrapper
 * 
 * @componentType server component
 */
export async function ProductListing({ category, products }: ProductListingProps) {
    const listings = useFragment(ProductsFragment, products);
    
    const { products: sortOptions } = await graphqlClient.request(GetCategorySortMethods, { uid: category.uid });
    const current = sortOptions?.sort_fields!.default;
    const options = sortOptions?.sort_fields!.options as { label: string; value: string }[];
    

    return (
        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            {/* padding had a pt-24.... curious if that was for alerts */}
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">{category.name}</h1>
                {/* <p className="mt-4 text-base text-gray-500">
                    Checkout out the latest release of Basic Tees, new and improved with four openings!
                </p> */}
                <div className="flex items-center">
                    <ProductSortOptions current={current!} options={options}/>
                    <ProductListOptions />
                </div>
            </div>

            <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                <ProductListingFilters categoryUid={category.uid} />

                <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                    <h2 id="product-heading" className="sr-only">
                        {category.name}
                    </h2>

                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                        {listings.items?.map((product) => (
                            <div
                                key={product?.uid}
                                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                            >
                                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={product?.small_image?.url!}
                                        alt={product?.small_image?.label!}
                                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col space-y-2 p-4">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        <a href={"/" + product?.url_key}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product?.name}
                                        </a>
                                    </h3>
                                    {/* <p className="text-sm text-gray-500">{product?.}</p> */}
                                    <div className="flex flex-1 flex-col justify-end">
                                        {/* <p className="text-sm italic text-gray-500">{product.options}</p> */}
                                        {/* <p className="text-base font-medium text-gray-900">{product.price}</p> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
