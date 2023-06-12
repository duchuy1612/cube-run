/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 640px)" },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}

