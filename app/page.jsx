import ContactForm from '@/components/ContactForm'
import SpotifyBlock from '@/components/SpotifyBlock'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
	return (
		<main className="mx-auto grid max-w-3xl grid-cols-8 gap-4 pt-8 md:pt-12 px-6 text-black">
			<div className="flex justify-center md:h-52 overflow-hidden items-center p-6 col-span-5 md:col-span-6 text-white border-2 border-pink rounded-xl">
				<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
					<Image
						src={'/Avatar.jpeg'}
						width={120}
						height={120}
						className="rounded-xl w-30 object-cover transition-all duration-200"
						alt="Avatar"
					/>

					<div className="text-center md:text-left">
						<h1 className="text-md md:text-2xl">brandon bartram</h1>
						<p className="text-pink">web & game developer 🐱</p>
					</div>
				</div>
			</div>
			<div className="flex h-full justify-center col-span-3 md:col-span-2 items-center rounded-xl">
				<div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-4">
					<Link
						title="blog"
						href={'/blog'}
						className="flex rounded-xl col-span-full items-center justify-center text-white bg-pink font-fira text-xs hover:scale-95 hover:bg-slate-200 hover:text-black transition-all duration-300"
					>
						<p className="">my blog</p>
					</Link>
					<Link
						title="twitter"
						href={'https://twitter.com/brandon_bartram'}
						target="_blank"
						className="flex group bg-twitter rounded-xl items-center justify-center hover:scale-95 transition-all duration-200"
					>
						<svg
							className="group-hover:rotate-12 transition-all duration-300"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							alt="twitter"
						>
							<path
								d="M14.977 1.467a.5.5 0 00-.87-.301 2.559 2.559 0 01-1.226.763A3.441 3.441 0 0010.526 1a3.539 3.539 0 00-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 00-.916-.048C.004 3.373-.157 5.407.604 7.139 1.27 8.656 2.61 9.864 4.51 10.665 3.647 11.276 2.194 12 .5 12a.5.5 0 00-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236.193-.546.232-1.178.177-2.006z"
								fill="white"
							></path>
						</svg>
					</Link>
					<Link
						title="linkedin"
						href={'https://www.linkedin.com/in/brandonbartram/'}
						target="_blank"
						className="flex group bg-blue-600 rounded-xl items-center justify-center hover:scale-95 transition-all duration-200"
					>
						<svg
							className="group-hover:-rotate-12 transition-all duration-300"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							alt="linkedin"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-12zM5 5H4V4h1v1zm-1 6V6h1v5H4zm4.5-4A1.5 1.5 0 007 8.5V11H6V6h1v.5a2.5 2.5 0 014 2V11h-1V8.5A1.5 1.5 0 008.5 7z"
								fill="white"
							></path>
						</svg>
					</Link>
				</div>
			</div>

			<div className="flex flex-col justify-center col-span-8 md:col-span-3 gap-4 items-center rounded-xl">
				<div className="flex flex-row w-full h-full gap-4">
					<div className="flex flex-col bg-slate-200 justify-center items-center gap-2 h-full w-full rounded-xl p-2">
						<svg
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width="15"
							height="15"
						>
							<path
								d="M7.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 107.5 0zm-2 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4z"
								fill="currentColor"
							></path>
						</svg>
						<div className="flex flex-col items-center text-xs">
							<p className="text-xs">follows</p>
							<p className="font-bold text-xs">1</p>
						</div>
					</div>
					<div className="flex flex-col bg-slate-200 justify-center items-center gap-2 h-full w-full rounded-xl p-2">
						<svg
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width="15"
							height="15"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M6.007 13.418l2-12 .986.164-2 12-.986-.164zm-.8-8.918l-3 3 3 3-.707.707L.793 7.5 4.5 3.793l.707.707zm5.293-.707L14.207 7.5 10.5 11.207l-.707-.707 3-3-3-3 .707-.707z"
								fill="currentColor"
							></path>
						</svg>
						<div className="flex flex-col items-center text-xs">
							<p className="text-xs">repos</p>
							<p className="font-bold text-xs">2</p>
						</div>
					</div>
				</div>
			</div>

			<Link
				href={'https://github.com/brandonbartram98'}
				target="_blank"
				className="relative flex h-38 md:h-52 col-span-4 md:col-span-5 p-3 md:p-6 bg-code text-white rounded-2xl group hover:scale-95 transition-all duration-300"
			>
				<div className="absolute rounded-xl inset-0 bg-black bg-opacity-80 z-0"></div>
				<div className="flex flex-col justify-between z-10 w-full">
					<div className="flex justify-between w-full">
						<svg
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
						>
							<path
								d="M9.358 2.145a8.209 8.209 0 00-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.17 2.17 0 00-.51-.053 1.258 1.258 0 00-.232.028l-.01.002-.004.002h-.003l.137.481-.137-.48a.5.5 0 00-.32.276 3.12 3.12 0 00-.159 2.101A3.354 3.354 0 002 5.93c0 1.553.458 2.597 1.239 3.268.547.47 1.211.72 1.877.863a2.34 2.34 0 00-.116.958v.598c-.407.085-.689.058-.89-.008-.251-.083-.444-.25-.629-.49a4.798 4.798 0 01-.27-.402l-.057-.093a9.216 9.216 0 00-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127-.254.968.484.127c.08.02.184.095.355.346a7.2 7.2 0 01.19.302l.068.11c.094.152.202.32.327.484.253.33.598.663 1.11.832.35.116.748.144 1.202.074V14.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-3.563c0-.315-.014-.604-.103-.873.663-.14 1.322-.39 1.866-.86.78-.676 1.237-1.73 1.237-3.292v-.001a3.354 3.354 0 00-.768-2.125 3.12 3.12 0 00-.159-2.1.5.5 0 00-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001-.004-.002-.009-.002a.671.671 0 00-.075-.015 1.261 1.261 0 00-.158-.013 2.172 2.172 0 00-.51.053c-.391.084-.93.283-1.636.716z"
								fill="currentColor"
							></path>
						</svg>
						<svg
							className="opacity-60 group-hover:opacity-100 transition-all duration-300"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width="15"
							height="15"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M9.318.975a3.328 3.328 0 114.707 4.707l-3.171 3.172-.708-.708 3.172-3.171a2.328 2.328 0 10-3.293-3.293L6.854 4.854l-.708-.708L9.318.975zm1.536 3.879l-6 6-.708-.708 6-6 .708.708zm-6 2l-3.172 3.171a2.329 2.329 0 003.293 3.293l3.171-3.172.708.708-3.172 3.171A3.328 3.328 0 11.975 9.318l3.171-3.172.708.708z"
								fill="white"
							></path>
						</svg>
					</div>
					<div>
						<p className="text-white font-bold">github</p>
						<p className="text-xs md:text-sm">personal projects</p>
					</div>
				</div>
			</Link>

			<div className="flex h-48 md:h-52 col-span-4 p-3 md:p-6 bg-slate-800 md:hover:bg-slate-900 rounded-xl relative transition-all duration-300 overflow-hidden text-white group">
				<SpotifyBlock />
			</div>

			<div className="flex h-38 md:h-52 justify-center col-span-8 md:col-span-4 items-center p-6 bg-slate-400 rounded-xl">
				<div className="flex">
					<h2></h2>
				</div>
			</div>

			<div className="flex h-38 md:h-52 justify-center col-span-5 items-center p-6 bg-slate-600 rounded-xl">
				<div className="flex">
					<h2></h2>
				</div>
			</div>

			<Link
				title="xist"
				target={'_blank'}
				href={'https://xistvr.com/'}
				className="flex h-38 md:h-52 justify-center col-span-3 items-center hover:scale-95 transition-all duration-300 p-6 bg-black rounded-xl"
			>
				<Image
					className="h-32 w-32 transition-all duration-300"
					src={'/xist.svg'}
					width={50}
					height={50}
					alt={''}
				/>
			</Link>

			<div className="flex justify-center col-span-8 items-center p-6 px-6 md:px-12 bg-pink rounded-xl">
				<div className="flex flex-col w-full">
					<ContactForm />
				</div>
			</div>
		</main>
	)
}
