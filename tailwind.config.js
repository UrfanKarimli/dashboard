/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: [],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif',],
      'inter': ["Inter", 'sans-serif',]
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1200px",
        'xl': '1000px'
      },
    },

    extend: {
      colors: {
        primary: {
          light: '#f6f6f6',
          dark: '#1B2431',
        },
        background: {
          light: '#ffffff',
          dark: '#273142',
        },
        text: {
          light: '#202224',
          dark: '#ffffff',
        },
        border: {
          light: '#E0E0E0',
          dark: '#cfcfcf13',
        },
        buttonBg: {
          light: '#FCFDFD',
          dark: '#323D4E'
        },
        'primary-50': 'rgb(var(--primary-50))',
        'primary-100': 'rgb(var(--primary-100))',
        'primary-200': 'rgb(var(--primary-200))',
        'primary-300': 'rgb(var(--primary-300))',
        'primary-400': 'rgb(var(--primary-400))',
        'primary-500': 'rgb(var(--primary-500))',
        'primary-600': 'rgb(var(--primary-600))',
        'primary-700': 'rgb(var(--primary-700))',
        'primary-800': 'rgb(var(--primary-800))',
        'primary-900': 'rgb(var(--primary-900))',
        'primary-950': 'rgb(var(--primary-950))',
        'surface-0': 'rgb(var(--surface-0))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))'
      }
    },
  },
  plugins: [],
}

