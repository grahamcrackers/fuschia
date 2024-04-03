import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        // "!./src/app/page.tsx",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/learn/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {},
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
};

export default config;
