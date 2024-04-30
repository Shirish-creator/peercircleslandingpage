/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    extend: {
      colors:{
        Brand:{
          Green:{
            '50': 'var(--brand-Green-50)',
            '100': 'var(--brand-Green-100)',
            '150': 'var(--brand-Green-200)',
            '200': 'var(--brand-Green-200)',
            '300': 'var(--brand-Green-300)',
            '400': 'var(--brand-Green-400)',
            '500': 'var(--brand-Green-500)',
            '600': 'var(--brand-Green-600)',
            '700': 'var(--brand-Green-700)',
            '800': 'var(--brand-Green-800)',
            '850': 'var(--brand-Green-850)',
            '900': 'var(--brand-Green-900)',
          },
          Yellow:{
            '50':'var(--brand-Green-900)',
            '100':'var(--brand-Green-900)',
            '150':'var(--brand-Green-900)',
            '200':'var(--brand-Green-900)',
            '300':'var(--brand-Green-900)',
            '400':'var(--brand-Green-900)',
            '500':'var(--brand-Green-900)',
            '600':'var(--brand-Green-900)',
            '700':'var(--brand-Green-900)',
            '800':'var(--brand-Green-900)',
            '850':'var(--brand-Green-900)',
            '900':'var(--brand-Green-900)',
          },
          Blue:{
            '50':'#e9f3fc',
            '100':'#d3e7f8',
            '200':'#a6d0f2',
            '300':'#7ab8eb',
            '400':'#4da1e5',
            '500':'#1c74bc',
            '600':'#1a6eb2',
            '700':'#145285',
            '800':'#0d3759',
            '900':'#071B2C',
            '950':'#030e16',
          },
  

        },
        Alias:{
          Primary: {
            '50': 'var(--Alias-Primary-50)',
            '100': 'var(--Alias-Primary-100)',
            '200': 'var(--Alias-Primary-200)',
            '300': 'var(--Alias-Primary-300)',
            '400': 'var(--Alias-Primary-400)',
            '500': 'var(--Alias-Primary-500)',
            '600': 'var(--Alias-Primary-600)',
            '700': 'var(--Alias-Primary-700)',
            '800': 'var(--Alias-Primary-800)',
            '850': 'var(--Alias-Primary-850)',
            '900': 'var(--Alias-Primary-900)',
          },
        }
       
      }
    },
  },
  plugins: [],
};
