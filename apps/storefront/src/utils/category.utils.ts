import { GetMegaMenuCategoriesQuery } from "@fuschia/graphql";
import { flatMapDeep } from "lodash";

// https://stackoverflow.com/a/56889859

// @ts-ignore do types later
const flatten = function (items) {
    const { children, ...rest } = items;
    return [rest, flatMapDeep(children, flatten)];
};

export const flattenCategories = ({ categories }: GetMegaMenuCategoriesQuery) => {
    return flatMapDeep(categories?.items![0]?.children, flatten);
};

export type Category = {
    uid: string;
    name: string;
    url_path: string;
    url_key: string;
    include_in_menu: number;
    position: number;
}

type CategoryMapKeys = keyof Omit<Category, "include_in_menu" | "position">;

/**
 *  Create's a flat map of our available Categories
 */
export const mapCategories = (categories: Category[], key: CategoryMapKeys): Record<string,Category> => {
    return categories.reduce((acc, category) => ({
         ...acc, [category[key]]: { ...category }
    }), {})
}

export type MegaMenuItem = {
    uid: string;
    name: string;
    href: string;
    included: boolean;
    position: number;
    children: MegaMenuItem[];
}

// @ts-ignore figure types out later
const recursiveMap = (old, cb, items: unknown[] = []) => {
    if(old.length <= 0) return items;

    const [item, ...rest] = old;
    const temp = [...items, cb(item)];

    return recursiveMap(rest, cb, temp);
}
/**
 * Generate NavItems for MegaMenu
 */
export const mapMegaMenuItems = ({ categories }: GetMegaMenuCategoriesQuery) => {
    const children = categories?.items![0]?.children;

    const items = [];
    
    // i think if these are ever null, this is where we default the values
    return recursiveMap(children, ((child: NonNullable<typeof children>[0]) => ({
        uid: child?.uid,
        name: child?.name,
        href: "/" + child?.url_path,
        included: child?.include_in_menu ? true : false,
        postion: child?.position,
        // children: recursiveMap(child?.children)
    }))) as MegaMenuItem[];
}
