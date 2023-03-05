'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SpotifyBlock() {
	const [loadingData, setLoadingData] = useState(false)
	const [loadingRecent, setLoadedRecentData] = useState(false)
	const [summaryData, setSummaryData] = useState({})
	const [recentData, setRecentData] = useState({})
	const [playtimeData, setPlaytimeData] = useState(0)

	const GetSteamSummaryData = async () => {
		const response = await fetch('/api/steamsummary', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		})

		const steam = await response.json()
		setSummaryData(steam)
		setLoadingData(true)
	}

	const GetSteamRecentData = async () => {
		const response = await fetch('/api/steamrecent', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		})

		const data = await response.json()
		setRecentData(data)
		setPlaytimeData(Math.floor(parseFloat(data.getPlaytime) / 60))
		setLoadedRecentData(true)
	}

	useEffect(() => {
		GetSteamSummaryData()
		GetSteamRecentData()
	}, [])
	return (
		<Link
			title="steam"
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
				{summaryData.getAvatar && (
					<Image
						className="rounded-md w-8 h-8 transition-all duration-300"
						src={summaryData.getAvatar}
						width={80}
						height={80}
						alt={'steamAvatar'}
					/>
				)}
				<div className="flex flex-col gap-2 transition-all duration-300">
					{loadingData && (
						<div>
							<p className="font-bold lowercase">{summaryData.getPersonName}</p>
							<p className="text-xs lowercase">{summaryData.getStatus}</p>
						</div>
					)}
				</div>
			</div>
			<div className="flex flex-col gap-2 text-white">
				<div className="flex flex-col gap-2 transition-all duration-300">
					{!loadingRecent ? (
						<div>
							<p className="lowercase">loading..</p>
						</div>
					) : (
						<div>
							<p className="font-bold">last played:</p>
							<p className="lowercase text-xs">{recentData.getGameName}</p>
							<p className="lowercase text-xs">playtime: {playtimeData}hrs</p>
						</div>
					)}
				</div>
			</div>
		</Link>
	)
}
