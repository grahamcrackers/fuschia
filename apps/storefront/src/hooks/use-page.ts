import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";


export const usePage = () => {
    const context = useContext(PageContext);

    if (context === null) {
        const err = new Error(`Missing <PageProvider />`);
        if (Error.captureStackTrace) Error.captureStackTrace(err, usePage);
        throw err;
    }

    return context;
};
