import { Object } from "ts-toolbelt";
import { GetMegaMenuCategoriesQuery } from "../__generated__/graphql";

type MenuCategoryChildren = Object.Path<GetMegaMenuCategoriesQuery, ["categories", "items", number, "children", number]>

// when using Omit, the type can't be null
export type MegaMenuCategory = Omit<NonNullable<MenuCategoryChildren>, "children">;

export type MegaMenu = MegaMenuCategory  & { children?: MegaMenuCategory[] }
