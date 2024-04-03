import { GetCurrencyDocument, GetMegaMenuDocument, GetStoreConfigDocument } from "@fuschia/graphql";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageProvider } from "../contexts/PageContext";
import { Navigation } from "../layout/navigation";
import { graphqlClient as client } from "../utils";

import { Footer } from "../layout/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Magento on Next.js",
    description: "Generated by create turbo",
};

export default async function RootLayout({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
    const { storeConfig } = await client.request(GetStoreConfigDocument);
    const { currency } = await client.request(GetCurrencyDocument);
    const { categories } = await client.request(GetMegaMenuDocument);

    // clean categories for mega menu and easier usage
    // TODO: i can't do recursion right apparently
    // const navigation = mapMegaMenuItems({ categories });

    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="stylesheet" href="https://magento-next.test/media/styles.css" />
                
            </head>
            <body className={`${inter.className} antialiased`}>
                <PageProvider>
                    <Navigation navigation={{categories}} />
                    {/* <Breadcrumbs /> */}
                    {children}
                    <Footer />
                </PageProvider>
            </body>
        </html>
    );
}
