/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "ui-sans-serif"],
      },
      colors: {
        brand: {
          500: "#2F88FF",
          600: "#1F6FE6",
          800: "#173E7B"
        }
      },
      boxShadow: {
        card: "0 12px 36px rgba(23,62,123,0.12)",
        soft: "0 6px 20px rgba(23,62,123,0.10)"
      }
    },
  },
  plugins: [],
};
