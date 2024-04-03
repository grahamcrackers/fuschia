"use client";

import { PropsWithChildren, createContext, useState } from "react";

export interface PageContextState {
    categoryId: string;
    setCategoryId(id: string): void;
}

export const PageContext = createContext<PageContextState | null>(null);

export const PageProvider = ({ children }: PropsWithChildren) => {
    const [categoryId, setCategoryId] = useState("");

    const values = {
        categoryId,
        setCategoryId,
    } satisfies PageContextState;

    return <PageContext.Provider value={values}>{children}</PageContext.Provider>;
};
