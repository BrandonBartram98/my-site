import ContactForm from '@/components/ContactForm'
import GitHubBlock from '@/components/GitHubBlock'
import SpotifyBlock from '@/components/SpotifyBlock'
import SteamBlock from '@/components/SteamBlock'
import ThreejsBlock from '@/components/ThreejsBlock'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
	return (
		<main className="mx-auto grid max-w-3xl grid-cols-8 gap-4 pt-8 md:pt-12 px-6 text-black">
			<div className="flex justify-center md:h-48 overflow-hidden items-center p-6 col-span-5 md:col-span-6 text-white bg-slate-800 border-drive rounded-xl">
				<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
					<Image
						src={'/images/Avatar.jpeg'}
						alt="avatar"
						width={100}
						height={100}
						className="rounded-full w-20 md:w-32 object-cover transition-all duration-200"
					/>

					<div className=" md:text-left flex flex-col gap-2">
						<div className="flex text-center md:text-left flex-col">
							<h1 className="text-md md:text-2xl">brandon bartram</h1>
							<p className="text-drive">web & game developer</p>
						</div>

						<div className="flex flex-col">
							<p className="text-xs">💻 currently @ xistvr</p>
							<p className="text-xs">🌍 norwich, uk</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex h-full justify-center col-span-3 md:col-span-2 items-center rounded-xl">
				<div className="grid grid-cols-2 grid-rows-3 sm:grid-rows-2 h-full w-full gap-4">
					<Link
						title="blog"
						href={'/blog'}
						className="flex rounded-xl col-span-full items-center justify-center text-white bg-drive font-fira text-xs hover:scale-95 hover:bg-slate-200 hover:text-drive transition-all duration-300"
					>
						<p className="font-semibold text-black rounded-lg">my blog</p>
					</Link>
					<Link
						title="twitter"
						href={'https://twitter.com/brandon_bartram'}
						target="_blank"
						className="flex group col-span-full sm:col-span-1 bg-twitter rounded-xl items-center justify-center hover:scale-95 transition-all duration-300"
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
						className="flex group bg-blue-600 col-span-full sm:col-span-1 rounded-xl items-center justify-center hover:scale-95 transition-all duration-300"
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

			<div className="flex h-44 md:h-48 col-span-4 md:col-span-3 bg-zinc-800 rounded-xl transition-all duration-300 overflow-hidden text-white group">
				<SteamBlock />
			</div>

			<Link
				href={'https://github.com/brandonbartram98'}
				target="_blank"
				className="relative flex h-44 md:h-48 col-span-4 md:col-span-5 p-3 md:p-6 bg-code text-white rounded-2xl group md:hover:scale-95 transition-all duration-300"
			>
				<GitHubBlock />
			</Link>

			<div className="flex h-44 md:h-48 col-span-4 bg-slate-800 md:bg-cross md:hover:bg-slate-900 rounded-xl relative transition-all duration-300 overflow-hidden text-white group">
				<SpotifyBlock />
			</div>

			<div className="flex h-44 md:h-48 col-span-4 bg-black rounded-xl transition-all duration-300 overflow-hidden text-white group">
				<ThreejsBlock />
			</div>

			<div className="flex md:h-48 relative justify-center col-span-8 md:col-span-5 items-center p-6 bg-slate-900 rounded-xl overflow-hidden">
				<span className="absolute top-0 right-0 px-8 py-1 text-xs tracking-wider text-center whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 font-fira bg-drive">
					who?
				</span>
				<div className="flex flex-col text-white">
					<p className="w-11/12 pb-2">
						I&apos;m a developer from Norwich. Currently at XistVR working on
						free-roam VR games with <span className="font-bold">Unity 👾</span>.
					</p>
					<p className="pb-2">
						For web I currently enjoy working with{' '}
						<span className="text-cyan-300 font-semibold">React</span>,
						<span className="text-neutral-100 font-semibold"> NextJS</span>,
						<span className="text-teal-300 font-semibold"> TailwindCSS</span>,
						<span className="text-drive font-semibold"> ThreeJS (R3F)</span>.
					</p>
					<p>
						In my freetime I&apos;m making websites like this one & learning{' '}
						<span className="text-orange-400 font-bold">Blender</span> to create
						models for game and web use.
					</p>
				</div>
			</div>

			<Link
				title="xist"
				target={'_blank'}
				href={'https://xistvr.com/'}
				className="flex h-44 md:h-48 justify-center col-span-3 items-center hover:scale-95 transition-all duration-300 p-6 bg-black rounded-xl"
			>
				<Image
					className="h-32 w-32 transition-all duration-300"
					src={'/images/xist.svg'}
					width={50}
					height={50}
					alt={''}
				/>
			</Link>

			<div className="flex flex-col md:hidden gap-4 h-44 md:h-48 col-span-5 rounded-xl transition-all duration-300 overflow-hidden text-white group">
				<div className="bg-drive bg-formal w-full h-full rounded-xl"></div>
				<div className="bg-slate-800 bg-formal w-full h-full rounded-xl"></div>
			</div>

			{/* <div className="flex h-44 md:h-48 col-span-2 bg-slate-700 rounded-xl transition-all duration-300 overflow-hidden text-white group"></div> */}

			{/* <div className="flex h-44 md:h-48 p-3 md:p-6 md:col-span-6 col-span-8 bg-zinc-700 rounded-xl transition-all duration-300 overflow-hidden text-white group">
				<GuestBookBlock />
			</div> */}

			<div className="flex justify-center col-span-8 items-center p-4 md:p-6 md:px-12 bg-drive rounded-xl">
				<div className="flex flex-col w-full">
					<ContactForm />
				</div>
			</div>
		</main>
	)
}
