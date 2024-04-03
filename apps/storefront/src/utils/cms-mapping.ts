/*
    For whatever reason you can't get the cms blocks by route, so i'm manually mapping them here, until
    I can write a plugin to get them by by route
*/

type UrlKey = "what-is-new" | "women" | "men" | "gear" | "training" | "sale";

type CmsInfo = {
    blocks: string[];
}

const blocksByRoute: Record<UrlKey, CmsInfo> = {
    "what-is-new": {
        blocks: ["new-block", "new-left-menu-block"],
    },
    "women": {
        blocks: ["women-block", "women-left-menu-block"]
    },
    "men": {
        blocks: ["men-block", "men-left-menu-block"]
    },
    "gear": {
        blocks: ["gear-block", "gear-left-menu-block"]
    },
    "training": {
        blocks: ["training-block", "training-left-menu-block"]
    },
    "sale": {
        blocks: ["sale-block", "sale-left-menu-block"]
    },
}

export const cmsBlocksByRoute = (urlKey: string) => {
    
}
