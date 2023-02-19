'use client'
import { useEffect, useState } from 'react'

export default function SpotifyBlock() {
	const [isListening, setIsListening] = useState(false)
	const [nowPlaying, setNowPlaying] = useState({})

	const GetSpotifyData = async () => {
		const response = await fetch('/api/spotify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const playing = await response.json()
		setNowPlaying(playing)
		setIsListening(playing.isPlaying)
	}

	useEffect(() => {
		GetSpotifyData()
	}, [])
	return (
		<div className="flex flex-col justify-between text-spotify">
			<svg
				className="group-hover:rotate-12 transition-all duration-300"
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

			{!isListening ? (
				<div className="flex items-center">
					<p>not listening</p>
				</div>
			) : (
				<div className="flex flex-col gap-2 text-white">
					<img
						className="rounded-l-lg w-40 hidden md:block absolute -right-16 top-1/2 transform -translate-y-1/2 group-hover:right-0 transition-all duration-300"
						src={nowPlaying.albumImageUrl}
					/>
					<div className="flex flex-col gap-2">
						<p className="text-spotify font-bold">currently listening</p>
						<div className="w-10/12">
							<p className="font-bold lowercase">{nowPlaying.title}</p>
							<p className="lowercase">{nowPlaying.artist}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
