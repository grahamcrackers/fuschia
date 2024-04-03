import { Object } from "ts-toolbelt";
import { GetMegaMenuCategoriesQuery } from "../../../../packages/graphql/src/__generated__/graphql";

/*
* use the number type to access arrays
* 
* helpful links 
* https://github.com/dotansimha/graphql-code-generator/issues/2832#issuecomment-547335985
* https://github.com/millsp/ts-toolbelt/issues/64#issuecomment-546610935
* */

type MenuCategoryChildren = Object.Path<GetMegaMenuCategoriesQuery, ["categories", "items", number, "children", number]>






export type CategoryView = {
    
}
