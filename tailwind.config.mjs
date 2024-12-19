/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        // Basis-Emotionen
        yellow: {
          50: '#FFFBEB',   // Joyful
          100: '#FEF3C7',  // Excited, Content
          200: '#FDE68A',  // Happy
          300: '#FBBF24',  // Stärkere Happy Töne
          400: '#F59E0B',  // Border für Happy
        },
        blue: {
          50: '#EFF6FF',   // Lonely
          100: '#DBEAFE',  // Heartbroken, Down
          200: '#BFDBFE',
          300: '#93C5FD',  // Sad
          400: '#60A5FA',
          500: '#3B82F6',  // Border für Sad
        },
        red: {
          50: '#FEF2F2',   // Frustrated
          100: '#FEE2E2',  // Irritated, Resentful
          200: '#FECACA',
          300: '#FCA5A5',  // Angry
          400: '#F87171',
          500: '#EF4444',  // Border für Angry
        },
        purple: {
          50: '#FAF5FF',   // Anxious
          100: '#EDE9FE',  // Insecure, Overwhelmed
          200: '#DDD6FE',
          300: '#C4B5FD',  // Fearful
          400: '#A78BFA',
          500: '#8B5CF6',  // Border für Fearful
        },
        green: {
          50: '#F0FDF4',   // Shocked
          100: '#DCFCE7',  // Amazed, Intrigued
          200: '#BBF7D0',
          300: '#86EFAC',  // Surprised
          400: '#4ADE80',
          500: '#22C55E',  // Border für Surprised
        },
        pink: {
          50: '#FDF2F8',   // Appalled
          100: '#FCE7F3',  // Uncomfortable, Offended
          200: '#FBCFE8',
          300: '#F9A8D4',  // Disgusted
          400: '#F472B6',
          500: '#EC4899',  // Border für Disgusted
        },
        gray: {
          50: '#F9FAFB',   // Calm
          100: '#F3F4F6',  // Reflective, Indifferent
          200: '#E5E7EB',
          300: '#D1D5DB',  // Neutral
          400: '#9CA3AF',
          500: '#6B7280',
          999: '#100C08',  // Custom Grau
          800: '#26221F',
          600: '#595550',
          FFF: '#F0EDEB',
        },
      },
    },
  },
  plugins: [],
};
