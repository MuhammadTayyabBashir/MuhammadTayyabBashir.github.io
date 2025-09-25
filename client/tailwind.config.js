// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           yellow: '#fcd34d',       // yellow-300
//           black: '#374151',        // gray-700
//           white: '#ffffff',
//         },
//         gray: {
//           50: '#f9fafb',
//           100: '#f3f4f6',
//           200: '#e5e7eb',
//           300: '#d1d5db',
//           400: '#9ca3af',
//           500: '#6b7280',
//           600: '#4b5563',
//           700: '#374151',
//           800: '#1f2937',
//           900: '#111827',
//         },
//         text: {
//           primary: '#374151',     // gray-700
//           secondary: '#4b5563',   // gray-600
//           light: '#9ca3af',       // gray-400
//           dark: '#ffffff',
//         },
//         bg: {
//           light: '#ffffff',       // white
//           dark: '#1f2937',        // gray-800
//           yellow: '#fcd34d',
//         },
//         border: {
//           DEFAULT: '#e5e7eb',     // gray-200
//           yellow: '#fcd34d',
//           dark: '#111827',
//         },
//         hover: {
//           light: '#f3f4f6',       // gray-100 (light mode hover bg)
//           dark: '#374151',        // gray-700 (dark mode hover bg)
//         },
//         success: '#10b981',
//         error: '#ef4444',
//         warning: '#f59e0b',
//         info: '#3b82f6',
//       },
//       fontSize: {
//         xs: ['0.75rem', { lineHeight: '1rem' }],
//         sm: ['0.875rem', { lineHeight: '1.25rem' }],
//         base: ['1rem', { lineHeight: '1.5rem' }],
//         lg: ['1.125rem', { lineHeight: '1.75rem' }],
//         xl: ['1.25rem', { lineHeight: '1.75rem' }],
//         '2xl': ['1.5rem', { lineHeight: '2rem' }],
//         '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
//         '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
//         '5xl': ['3rem', { lineHeight: '1' }],
//       },
//       spacing: {
//         '4.5': '1.125rem',
//         '5.5': '1.375rem',
//         '6.5': '1.625rem',
//         '7.5': '1.875rem',
//       },
//       borderRadius: {
//         xl: '1rem',
//         '2xl': '1.5rem',
//         '3xl': '2rem',
//       },
//       boxShadow: {
//         brand: '0 4px 6px -1px rgba(247, 212, 76, 0.3)',
//         black: '0 2px 8px rgba(55, 65, 81, 0.15)',
//       },
//       animation: {
//         'bounce-slow': 'bounce 3s infinite',
//         'spin-slow': 'spin 3s linear infinite',
//         marquee: 'marquee 15s linear infinite',
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(100%)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//       transitionDuration: {
//         1500: '1500ms',
//         2000: '2000ms',
//       },
//     },
//   },
//   plugins: [
//     function ({ addUtilities }) {
//       addUtilities({
//         '.scrollbar-hide': {
//           '-ms-overflow-style': 'none',
//           'scrollbar-width': 'none',
//           '&::-webkit-scrollbar': {
//             display: 'none',
//           },
//         },
//         // Optional helpers you were using
//         '.hover-light': {
//           '@apply hover:bg-gray-100 text-gray-900': {},
//         },
//         '.hover-dark': {
//           '@apply dark:hover:bg-white dark:hover:text-gray-900': {},
//         },
//         '.hover-yellow': {
//           '@apply hover:text-brand-yellow': {},
//         },
//       });
//     },
//   ],
// };
// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': {
          primary: '#1f2937',  // gray-800
          dark: '#f3f4f6',     // gray-100
          light: '#9ca3af',    // gray-400
        },
        'bg': {
          light: '#ffffff',    // white
          dark: '#111827',     // gray-900
        },
        'border': {
          DEFAULT: '#e5e7eb',  // gray-200
          dark: '#374151',     // gray-700
        },
        'hover': {
          light: '#f3f4f6',    
          dark: '#374151',     
        },
        'brand-yellow': '#fcd34d',  //#fcd34d
        'error': '#ef4444',       
      },
    },
  },
  plugins: [
     function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.hover-light': {
          '@apply hover:bg-gray-100 text-gray-900': {},
        },
        '.hover-dark': {
          '@apply dark:hover:bg-white dark:hover:text-gray-900': {},
        },
        '.hover-yellow': {
          '@apply hover:text-brand-yellow': {},
        },
      });
    },
  ],
};
