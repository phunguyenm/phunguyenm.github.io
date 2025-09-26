/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#F9DDE2',
        pastelCream: '#FFF2E2',
        pastelLavender: '#E9E1FF',
        pastelMint: '#D9F2EA',
        cocoa: '#6B4E4E',
      },
      boxShadow: {
        soft: '0 8px 20px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '1rem',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

