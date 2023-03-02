/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				darkbg: '#141414',
				twitter: '#1DA1F2',
				github: '#161b22',
				drive: '#e94299',
				spotify: '#18E78D',
			},
			backgroundImage: {
				code: "url('/images/code.gif')",
				griddy: "url('/images/griddy.png')",
				cross: "url('/images/crosspattern.svg')",
				stripes: "url('/images/stripes.svg')",
				formal: "url('/images/formal.svg')",
				steam: "url('/images/steamlogo.svg')",
			},
		},
		fontFamily: {
			fira: ['Fira Code', 'monospace'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
