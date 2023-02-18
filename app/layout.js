import './globals.css'

export default function RootLayout({ children }) {
	const footer = (
		<footer className="flex flex-col justify-center col-span-8 items-center text-white mt-2 pb-20 pt-4 gap-4">
			<p className="text-xs">
				Powered By{' '}
				<a href="https://vercel.com" className="underline">
					Vercel
				</a>
				.&nbsp;Built By{' '}
				<a href="https://twitter.com/brandon_bartram" className="underline">
					Me
				</a>
				.
			</p>
			<svg
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
			>
				<path
					d="M6.765 5.235a1.79 1.79 0 10-2.53 2.53L7.5 11.03l3.265-3.265a1.79 1.79 0 00-2.53-2.53L7.5 5.97l-.735-.735z"
					fill="currentColor"
				></path>
			</svg>
		</footer>
	)

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				{children}
				{footer}
			</body>
		</html>
	)
}
