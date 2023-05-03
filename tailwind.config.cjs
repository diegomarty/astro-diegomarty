/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
	theme: {
		extend: {
			animation: {
			  background: 'background ease infinite',
			},
			keyframes: {
			  background: {
				'0%, 100%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '100% 50%' },
			  },
			},
		},
	},
	daisyui: {
		themes: ['dark']
	},
}
