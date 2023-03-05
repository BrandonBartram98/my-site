'use client'
import useSWR, { preload } from 'swr'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
preload('/api/spotify', fetcher)

export default function ChatbotBlock() {
	const [question, setQuestion] = useState('')
	const [answer, setAnswer] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		const { data, error, isLoading } = useSWR('/api/chatgpt', fetcher(question))
	}

	return (
		<div className="flex flex-col gap-3 justify-between relative w-full h-full text-white">
			<div className="flex flex-col justify-between gap-3 text-white">
				<div className="flex items-center justify-between">
					<svg
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
					>
						<path
							d="M5 8.5a.5.5 0 111 0 .5.5 0 01-1 0zm4 0a.5.5 0 111 0 .5.5 0 01-1 0z"
							fill="currentColor"
						></path>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8 2.022A5.5 5.5 0 0113 7.5v6a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 13.5v-6a5.5 5.5 0 015-5.478V0h1v2.022zM5.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm1.5 5H4v-1h7v1z"
							fill="currentColor"
						></path>
						<path d="M0 8v4h1V8H0zm15 0h-1v4h1V8z" fill="currentColor"></path>
					</svg>
					<p className="text-xs tracking-tight">powered by chatgpt</p>
				</div>
			</div>
			<p>{answer}</p>
			<form className="flex flex-row gap-2 text-white">
				<input
					required
					onChange={(e) => {
						setQuestion(e.target.value)
					}}
					className="rounded-md p-2 w-full font-fira text-sm"
					type="text"
					placeholder="ask me something.."
				/>
				<button className="bg-white text-black rounded-md px-5" type="submit">
					<p>ask</p>
				</button>
			</form>
		</div>
	)
}
