import ContactForm from '@/components/ContactForm'
import SpotifyBlock from '@/components/SpotifyBlock'
import SteamBlock from '@/components/SteamBlock'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
	return (
		<main className="mx-auto grid max-w-3xl grid-cols-8 gap-4 pt-8 md:pt-12 px-6 text-black">
			<div className="flex justify-center md:h-52 overflow-hidden items-center p-6 col-span-5 md:col-span-6 text-white border-double border-4 bg-slate-900 border-drive rounded-xl">
				<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
					<Image
						src={'/images/Avatar.jpeg'}
						width={100}
						height={100}
						className="rounded-xl w-20 md:w-32 object-cover transition-all duration-200"
						alt="Avatar"
					/>

					<div className="text-center md:text-left">
						<h1 className="text-md md:text-2xl">brandon bartram</h1>
						<p className="text-drive">web & game developer</p>
						<p className="">currently @ xistvr</p>
					</div>
				</div>
			</div>
			<div className="flex h-full justify-center col-span-3 md:col-span-2 items-center rounded-xl">
				<div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-4">
					<Link
						title="blog"
						href={'/blog'}
						className="flex rounded-xl shadow-inner col-span-full items-center justify-center text-white bg-drive font-fira text-xs hover:scale-95 hover:bg-slate-200 hover:text-black transition-all duration-300"
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
							className="group-hover:rotate-12 transition-all duration-300 p-1 md:p-0"
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
							className="group-hover:-rotate-12 transition-all duration-300 p-1 md:p-0"
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

			<div className="flex h-48 md:h-52 col-span-3 bg-zinc-800 rounded-xl transition-all duration-300 overflow-hidden text-white group">
				<SteamBlock />
			</div>

			<Link
				href={'https://github.com/brandonbartram98'}
				target="_blank"
				className="relative flex h-38 md:h-52 col-span-5 p-3 md:p-6 bg-code text-white rounded-2xl group hover:scale-95 transition-all duration-300"
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

			<div className="flex h-48 md:h-52 col-span-4 bg-slate-800 md:hover:bg-slate-900 rounded-xl relative transition-all duration-300 overflow-hidden text-white group">
				<SpotifyBlock />
			</div>

			<div className="flex h-48 md:h-52 col-span-4 p-3 md:p-6 bg-zinc-600 rounded-xl transition-all duration-300 overflow-hidden text-white group"></div>

			<div className="flex h-38 relative md:h-52 justify-center col-span-8 md:col-span-5 items-center p-6 bg-slate-600 rounded-xl overflow-hidden">
				<span className="absolute top-0 right-0 px-8 py-1 text-xs tracking-wider text-center whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 font-fira bg-drive">
					who?
				</span>
				<div className="flex flex-col text-white">
					<p className="w-11/12 pb-2">
						I am a developer from Norwich UK. Currently at XistVR working on
						free-roam VR games with <span className="font-bold">Unity</span>.
					</p>
					<p className="pb-2">
						For web I currently enjoy working with{' '}
						<span className="text-blue-400 font-bold">React</span>,
						<span className="text-black font-bold"> NextJS</span>,
						<span className="text-cyan-300 font-bold"> TailwindCSS</span>,
						<span className="text-drive font-bold"> ThreeJS (R3F)</span>, and
						<span className="text-green-400 font-bold"> PostgreSQL</span>
					</p>
					<p>
						In my freetime I am learning{' '}
						<span className="text-orange-400 font-bold">Blender</span> to create
						models for game and web use.
					</p>
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
					src={'/images/xist.svg'}
					width={50}
					height={50}
					alt={''}
				/>
			</Link>

			<div className="flex justify-center col-span-8 items-center p-4 md:p-6 md:px-12 bg-drive rounded-xl">
				<div className="flex flex-col w-full">
					<ContactForm />
				</div>
			</div>
		</main>
	)
}
