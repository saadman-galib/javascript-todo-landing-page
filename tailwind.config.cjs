/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ECF0F9",
                "gray-100": "#D9E1F2",
                "gray-200": "#C6D3EC",
                "gray-300": "#9FB5DF",
                "gray-400": "#6689CC",
                "gray-500": "#3960AC",
                "gray-600": "#264073",
                "accent": "#406BBF",
                "foreground": "#132039",
                "category-personal-lighter": "#F2D9D9",
                "category-personal-active": "#ECC6C6",
                "category-personal-normal": "#DF9F9F",
                "category-personal-light": "#CC6666",
                "category-personal": "#BF4040",
                "category-personal-Dark": "#732626",
                "category-personal-foreground": "#391313",
                "category-urgent-normal": "#B5DF9F",
                "category-urgent-lighter": "#E1F2D9",
                "category-urgent-dark": "#407326",
                "category-urgent-foreground": "#203913",
                "category-urgent": "#6ABF40",
                "category-urgent-light": "#88CC66",
                "category-urgent-active": "#D2ECC6",
            },
            fontFamily: {
                Inter: ["Inter", "sans-serif"],
                Montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
