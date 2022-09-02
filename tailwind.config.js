module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--theme-primary)",
        'main-text': "var(--theme-text)",
        'main-bg': "var(--theme-bg)",
        'secondary-bg': "var(--theme-secondary-bg)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
