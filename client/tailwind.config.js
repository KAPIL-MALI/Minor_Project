/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        prime: {
          blue: '#2563eb',
          dark: '#0f172a',
          darker: '#020617',
          light: '#f8fafc',
          accent: '#38bdf8',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(56, 189, 248, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.6)' },
        }
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        DEFAULT: '0 4px 14px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 6px 20px 0 rgba(0, 0, 0, 0.08)',
        'lg': '0 10px 30px 0 rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 40px -4px rgba(0, 0, 0, 0.12)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0071E3",
          secondary: "#AF52DE",
          accent: "#FF2D55",
          neutral: "#D2D2D7",
          "base-100": "#FFFFFF",
          "base-200": "#FBFBFD",
          "base-300": "#F5F5F7",
          "base-content": "#1D1D1F",
          info: "#0071E3",
          success: "#34C759",
          warning: "#FF9500",
          error: "#FF3B30",
          "--rounded-box": "1.25rem", // 20px
          "--rounded-btn": "0.75rem", // 12px
          "--tab-radius": "0.75rem",
        },
        dark: {
          primary: "#0071E3",
          secondary: "#AF52DE",
          accent: "#FF2D55",
          neutral: "#3A3A3C",
          "base-100": "#000000",
          "base-200": "#1C1C1E",
          "base-300": "#2C2C2E",
          "base-content": "#FFFFFF",
          info: "#0071E3",
          success: "#34C759",
          warning: "#FF9500",
          error: "#FF3B30",
          "--rounded-box": "1.25rem",
          "--rounded-btn": "0.75rem",
          "--tab-radius": "0.75rem",
        },
      },
    ],
  },
}