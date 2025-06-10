/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E91E63',
                accent: '#424242',
                ivory: '#FFFFF0',
                lightgray: '#F5F5F5',
            },
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                lora: ['Lora', 'serif'],
            },
            boxShadow: {
                'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
                'card-hover': '0 8px 30px rgba(0, 0, 0, 0.08)',
                'button': '0 2px 4px rgba(233, 30, 99, 0.2)',
                'button-hover': '0 4px 6px rgba(233, 30, 99, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(2rem)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slowZoom: {
                    '0%': { transform: 'scale(1.05)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            },
        },
    },
    plugins: [],
}