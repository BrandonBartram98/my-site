'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SpotifyBlock() {
	const [loadingData, setLoadingData] = useState(false)
	const [isListening, setIsListening] = useState(false)
	const [nowPlaying, setNowPlaying] = useState({})

	const [songUrl, setSongUrl] = useState('')

	const GetSpotifyData = async () => {
		const response = await fetch('/api/spotify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const playing = await response.json()
		setNowPlaying(playing)
		if (!playing.isPlaying) {
			setSongUrl(
				'https://open.spotify.com/playlist/4FKL1mD79QAm4h3GWktFcy?si=5d48ab58bb554ecb'
			)
		} else {
			setSongUrl(playing.songUrl)
		}
		setIsListening(playing.isPlaying)
		setLoadingData(true)
	}

	useEffect(() => {
		GetSpotifyData()
	}, [])
	return (
		<Link
			target={'_blank'}
			href={songUrl}
			className="flex flex-col w-full h-full p-3 md:p-6 justify-between text-white"
		>
			<svg
				className="md:group-hover:rotate-[25deg] transition-all z-20 duration-300"
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.726-2.203c-1.621-.132-3.272.066-4.625.544l-.333-.943c1.5-.53 3.293-.74 5.04-.597 1.743.142 3.478.641 4.843 1.568l-.562.827c-1.185-.804-2.74-1.266-4.363-1.399zm-4.4 2.695c3.446-.61 5.848-.297 7.839 1.132l.583-.813C9.45 6.661 6.732 6.374 3.152 7.008l.174.984zm.336 2.124c.986-.24 2.2-.345 3.392-.228 1.196.117 2.334.454 3.202 1.065l.575-.819c-1.053-.74-2.375-1.113-3.68-1.241a11.446 11.446 0 00-3.726.252l.237.971z"
					fill="currentColor"
				></path>
			</svg>
			{!loadingData ? (
				<p>loading..</p>
			) : (
				<>
					{!isListening ? (
						<div className="flex flex-col gap-2 text-white transition-all duration-300">
							<Image
								className="z-0 md:z-20 w-full h-full md:w-40 md:h-40 object-cover opacity-20 md:opacity-100 absolute -right-0 md:-right-16 top-1/2 transform -translate-y-1/2 md:group-hover:right-0 transition-all duration-300"
								src={'/images/evangelion.jpg'}
								width={160}
								height={160}
								alt={''}
							/>
							<div className="flex flex-col z-20 gap-2 md:group-hover:opacity-60">
								<div className="text-red-400 font-bold flex gap-2">
									<p className="flex">not listening</p>
									<div className="flex w-2 h-2">
										<span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
									</div>
								</div>
								<div className="w-10/12">
									<p className="font-bold lowercase">featured playlist</p>
									<p className="lowercase">chi</p>
								</div>
							</div>
						</div>
					) : (
						<div className="flex flex-col gap-2 text-white">
							<Image
								className="z-0 md:z-20 w-full h-full md:w-40 md:h-40 object-cover md:object-contain opacity-20 md:opacity-100 absolute -right-0 md:-right-16 top-1/2 transform -translate-y-1/2 md:group-hover:right-0 transition-all duration-300"
								src={nowPlaying.albumImageUrl}
								width={100}
								height={100}
								alt={'albumArt'}
							/>
							<div className="flex flex-col gap-2 md:group-hover:opacity-60 z-10">
								<div className="text-spotify font-bold flex gap-2">
									<p className="flex">currently listening</p>
									<div className="flex w-2 h-2">
										<span className="animate-ping inline-flex absolute h-2 w-2 rounded-full bg-spotify"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-spotify"></span>
									</div>
								</div>
								<div className="md:w-9/12">
									<p className="font-bold lowercase truncate ">
										{nowPlaying.title}
									</p>
									<p className="lowercase">{nowPlaying.artist}</p>
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</Link>
	)
}
