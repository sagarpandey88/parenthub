/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '.dark-theme'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        dark: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          50: 'rgb(var(--color-primary) / 0.1)',
          100: 'rgb(var(--color-primary) / 0.2)',
          200: 'rgb(var(--color-primary) / 0.3)',
          300: 'rgb(var(--color-primary) / 0.4)',
          400: 'rgb(var(--color-primary) / 0.6)',
          500: 'rgb(var(--color-primary) / 0.8)',
          600: 'rgb(var(--color-primary) / 0.9)',
          700: 'rgb(var(--color-primary) / 0.95)',
          800: 'rgb(var(--color-primary))',
          900: 'rgb(var(--color-primary))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          50: 'rgb(var(--color-secondary) / 0.1)',
          100: 'rgb(var(--color-secondary) / 0.2)',
          200: 'rgb(var(--color-secondary) / 0.3)',
          300: 'rgb(var(--color-secondary) / 0.4)',
          400: 'rgb(var(--color-secondary) / 0.6)',
          500: 'rgb(var(--color-secondary) / 0.8)',
          600: 'rgb(var(--color-secondary) / 0.9)',
          700: 'rgb(var(--color-secondary) / 0.95)',
          800: 'rgb(var(--color-secondary))',
          900: 'rgb(var(--color-secondary))',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          50: 'rgb(var(--color-accent) / 0.1)',
          100: 'rgb(var(--color-accent) / 0.2)',
          200: 'rgb(var(--color-accent) / 0.3)',
          300: 'rgb(var(--color-accent) / 0.4)',
          400: 'rgb(var(--color-accent) / 0.6)',
          500: 'rgb(var(--color-accent) / 0.8)',
          600: 'rgb(var(--color-accent) / 0.9)',
          700: 'rgb(var(--color-accent) / 0.95)',
          800: 'rgb(var(--color-accent))',
          900: 'rgb(var(--color-accent))',
        },
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
      },
      textColor: {
        base: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
      },
      backgroundColor: {
        base: 'rgb(var(--color-background) / <alpha-value>)',
      },
      borderColor: {
        base: 'rgb(var(--color-foreground) / <alpha-value>)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },
    },
  },
  plugins: [],
}