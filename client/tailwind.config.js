/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Varela Round", "sans-serif"],
                sans: ["Open Sans", "sans-serif"],
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0b0edd",
                    secondary: "#99b1dd",
                    accent: "#234187",
                    neutral: "#2a2a3c",
                    "base-100": "#edeef7",
                    info: "#6dbce3",
                    success: "#188140",
                    warning: "#f58505",
                    error: "#e01f28",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
