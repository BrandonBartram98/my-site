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
				darkbg: '#101110',
				twitter: '#1DA1F2',
				github: '#161b22',
				drive: '#e94299',
				spotify: '#18E78D',
			},
			backgroundImage: {
				code: "url('https://media3.giphy.com/media/1lvotGQwhzi6O0gQtV/giphy.gif?cid=ecf05e47po1y2ahk8xg138gxwnxuhs7rlyevajj91lp86ahk&rid=giphy.gif&ct=g')",
				griddy: "url('/images/griddy.png')",
				cross: "url('/images/crosspattern.svg')",
				stripes: "url('/images/stripes.svg')",
				formal: "url('/images/formal.svg')",
			},
		},
		fontFamily: {
			fira: ['Fira Code', 'monospace'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
