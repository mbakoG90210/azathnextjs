/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '170': '40rem',
        '186': '44rem',
      }
    }
  },
  plugins: [require("daisyui"),('tailwind-clip-path'),],

    // daisyUI config (optional)
    daisyui: {
      styled: true,
      themes: ["emerald", "light"],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
}