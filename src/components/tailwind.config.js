/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official NC A&T Brand Palette
        'aggie-blue': '#004684',
        'aggie-gold': '#FDB927',
        'aggie-slate': '#F1F5F9', // Used for secondary section backgrounds
        'aggie-gray': '#64748b',  // Used for secondary text
      },
      fontFamily: {
        // Serif for headers (EB Garamond is the closest free Google Font)
        'serif': ['"EB Garamond"', 'serif'],
        // Bold Sans for navigation and buttons
        'sans': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        // Used for that "Institutional" look in the sidebar
        'institutional': '0.3em',
      },
    },
  },
  plugins: [],
}