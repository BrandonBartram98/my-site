'use client'
import useSWR, { preload } from 'swr'
import Image from 'next/image'
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
preload('/api/steamrecent', fetcher)
preload('/api/steamsteamsummary', fetcher)

const SummaryData = () => {
	const { data, error, isLoading } = useSWR('/api/steamsummary', fetcher)

	if (error) {
		console.log(error)
		return <p></p>
	}
	if (isLoading) return <div></div>

	return (
		<>
			<Image
				className="rounded-md w-8 h-8 transition-all duration-300"
				src={data.getAvatar}
				width={80}
				height={80}
				alt={'steamAvatar'}
			/>
			<div className="flex flex-col gap-2 transition-all duration-300">
				<div>
					<p className="font-bold lowercase">{data.getPersonName}</p>
					<p className="text-xs lowercase">{data.getStatus}</p>
				</div>
			</div>
		</>
	)
}

const RecentData = () => {
	const { data, error, isLoading } = useSWR('/api/steamrecent', fetcher)
	if (error) return <p>error..</p>
	if (isLoading) return <p>loading..</p>
	return (
		<>
			<div>
				<p className="font-bold">last played:</p>
				<p className="lowercase text-xs">{data.getGameName}</p>
				<p className="lowercase text-xs">
					playtime: {Math.floor(parseFloat(data.getPlaytime) / 60)}hrs
				</p>
			</div>
		</>
	)
}

export default function SpotifyBlock() {
	return (
		<Link
			target={'_blank'}
			href="https://steamcommunity.com/id/BDonBarty"
			className="flex flex-col gap-3 justify-between relative w-full h-full p-3 md:p-6 text-white"
		>
			<Image
				className="w-full h-full p-4 absolute object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-5"
				src={'/images/steamlogo.svg'}
				width={50}
				height={50}
				alt={''}
			/>
			<div className="flex flex-row items-center gap-3 text-white">
				<SummaryData />
			</div>
			<div className="flex flex-col gap-2 text-white">
				<div className="flex flex-col gap-2 transition-all duration-300">
					<RecentData />
				</div>
			</div>
		</Link>
	)
}
