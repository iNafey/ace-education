/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'navy': '#03254b',
        'ocean': '#026295',
        'sky': '#55a3d3',
        'pastel-blue': '#55a3d3',
        'midnight-grey': '#1e2129',
        'night-grey': '#393f4f',
        'slate': '#55727f',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} 