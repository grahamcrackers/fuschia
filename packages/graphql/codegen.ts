import { type CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const config: CodegenConfig = {
    schema: process.env.MAGENTO_GRAPHQL_URL,
    documents: ["src/**/*.{ts,tsx}"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            config: {
                avoidOptionals: true,
                skipTypename: true,
                maybeValue: "T | undefined",
            },
        },
    },
    ignoreNoDocuments: true,
    hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
