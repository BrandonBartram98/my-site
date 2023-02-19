'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SpotifyBlock() {
	const [loadingData, setLoadingData] = useState(false)
	const [steamData, setSteamData] = useState({})

	const [profileUrl, setProfileUrl] = useState('')

	const GetSteamData = async () => {
		const response = await fetch('/api/steam', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const steam = await response.json()

		setProfileUrl(steam.getprofileUrl)
		setSteamData(steam)
		setLoadingData(true)
	}

	useEffect(() => {
		GetSteamData()
	}, [])
	return (
		<Link
			target={'_blank'}
			href={profileUrl}
			className="flex flex-col justify-end relative w-full h-full p-3 md:p-6 text-white"
		>
			<Image
				className="w-full h-full p-4 absolute object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-20"
				src={'/steamlogo.svg'}
				width={50}
				height={50}
				alt={''}
			/>
			{!loadingData ? (
				<p>loading..</p>
			) : (
				<div className="flex flex-col gap-2 text-white">
					<img
						className="rounded-xl w-20 h-20 group-hover:translate-y-0 -translate-y-40 transition-all duration-300"
						src={steamData.getAvatar}
					/>
					<div className="flex flex-col gap-2 group-hover:translate-y-0 translate-y-20 transition-all duration-300">
						<div className="md:w-9/12">
							<p className="font-bold lowercase">{steamData.getPersonName}</p>
							<p className="lowercase">{steamData.getStatus}</p>
						</div>
					</div>
				</div>
			)}
		</Link>
	)
}
