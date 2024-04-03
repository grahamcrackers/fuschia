const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        // "eslint:recommended",
        "prettier",
        require.resolve("@vercel/style-guide/eslint/next"),
        "eslint-config-turbo",
    ],
    globals: {
        React: true,
        JSX: true,
    },
    env: {
        node: true,
        browser: true,
    },
    plugins: ["only-warn"],
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    rules: {
        // magento/adobe commerce takes care of image optimization
        "@next/next/no-img-element": "off"
    },
    overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
    ignorePatterns: [
        // Ignore dotfiles
        ".*.js",
        "node_modules/",
    ],
};
