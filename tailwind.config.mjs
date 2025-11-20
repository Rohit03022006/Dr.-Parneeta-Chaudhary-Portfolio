/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: "#f4ffff",
                darkHover: "#004040ff",
                darkTheme: "#004040ff",
                lightTheme: "#f4ffff",
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                serif: ['var(--font-playfair)'],
            },
        },
    },
    plugins: [],
}