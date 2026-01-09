import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config

// NOTE: In Tailwind v4, theme customization is done in CSS using @theme directive
// See src/index.css for customizing fonts, colors, and other theme values
