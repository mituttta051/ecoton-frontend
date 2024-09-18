import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content(),
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif'],
            },
            boxShadow: {
                'custom': '5px 4px 7.5px 0px #00000040',
            },
            colors: {
                'default': {
                    '50': '#f7f6f5',
                    '100': '#edebe7',
                    '200': '#dbd5cd',
                    '300': '#bcb2a3',
                    '400': '#ab9d8c',
                    '500': '#9a8775',
                    '600': '#8d7869',
                    '700': '#766458',
                    '800': '#61524b',
                    '900': '#50453e',
                    '950': '#2a2320',
                },
            }
        },
    },
    plugins: [flowbite.plugin()],
};
export default config;