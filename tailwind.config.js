/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [daisyui],
    daisyui: {
        themes: [
            //   "autumn", // Keep original autumn theme as fallback
            {
                myTheme: { // Object format for custom theme
                    "primary": "oklch(0% 0 0)",
                    "secondary": "oklch(22.45% 0.075 37.85)",
                    "accent": "oklch(46.44% 0.111 37.85)",
                    "neutral": "oklch(55% 0.195 38.402)",
                    "neutral-dark": "#ae2c00",
                    "base-100": "#f1f1f1",
                    "base-200": "oklch(85% 0.02 37.85)",
                    "base-300": "oklch(75% 0.03 37.85)",
                    "info": "oklch(72% 0.17 247.62)",
                    "success": "oklch(65% 0.15 146.26)",
                    "warning": "oklch(68% 0.16 83.87)",
                    "error": "oklch(58% 0.16 27.33)",
                }
            }
        ],
    }
}