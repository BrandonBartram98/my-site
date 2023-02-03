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
				darkbg: '#171717',
				mustard: '#FFDD4A',
				twitter: '#1DA1F2',
				github: '#161b22',
				linkedin: '#7fc05e',
			},
			backgroundImage: {
				code: "url('https://media3.giphy.com/media/1lvotGQwhzi6O0gQtV/giphy.gif?cid=ecf05e47po1y2ahk8xg138gxwnxuhs7rlyevajj91lp86ahk&rid=giphy.gif&ct=g')",
			},
		},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			antonio: ['Antonio', 'sans-serif'],
			fira: ['Fira Code', 'monospace'],
		},
	},
	plugins: [],
}
