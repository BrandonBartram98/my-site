'use client'
import { useState } from 'react'

export default function ContactForm() {
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [submitted, setSubmitted] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Sending')
		setLoading(true)
		let data = {
			email,
			message,
		}

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log('Response received')
			setLoading(false)
			if (res.status === 200) {
				console.log('Response succeeded!')
				setSubmitted(true)
				setEmail('')
				setMessage('')
			}
		})
	}

	if (submitted) {
		return (
			<div className="text-center">
				<h2 className="text-2xl font-bold pb-4">Thanks!</h2>
				<p className="text-black/80">
					I&apos;ll get back to you as soon as possible.
				</p>
			</div>
		)
	}

	return (
		<>
			<div className="text-left pb-4">
				<h2 className="font-bold pb-1 text-lg">contact me</h2>
				<p>fill in the form below, I&apos;ll get back to you asap.</p>
			</div>
			<form
				onSubmit={async (event) => {
					event.preventDefault()
					handleSubmit(event)
					setLoading(true)
				}}
				method="POST"
				action="/api/contact"
				className="flex flex-col gap-4 w-full"
			>
				<label htmlFor="email">
					<input
						className="w-full text-sm rounded-md p-2 font-fira"
						required
						placeholder="name@gmail.com"
						type="email"
						name="email"
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
				</label>
				<label htmlFor="body">
					<textarea
						rows={4}
						type="text"
						placeholder="your message"
						className="w-full rounded-md p-2 text-sm resize-y font-fira"
						name="message"
						onChange={(e) => {
							setMessage(e.target.value)
						}}
					/>
				</label>
				<button
					type="submit"
					className="flex justify-center p-2 bg-black hover:bg-gray-900 transition-all duration-300 rounded-md text-white text-center"
				>
					{loading ? (
						<div className="loader">
							<svg
								className="h-6 w-6 animate-spin stroke-white"
								viewBox="0 0 256 256"
							>
								<line
									x1="128"
									y1="32"
									x2="128"
									y2="64"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="24"
								></line>
								<line
									x1="195.9"
									y1="60.1"
									x2="173.3"
									y2="82.7"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="24"
								></line>
								<line
									x1="224"
									y1="128"
									x2="192"
									y2="128"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="24"
								></line>
								<line
									x1="195.9"
									y1="195.9"
									x2="173.3"
									y2="173.3"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="24"
								></line>
								<line
									x1="128"
									y1="224"
									x2="128"
									y2="192"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="24"
								></line>
								<line
									x1="60.1"
									y1="195.9"
									x2="82.7"
									y2="173.3"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="24"
								></line>
								<line
									x1="32"
									y1="128"
									x2="64"
									y2="128"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="24"
								></line>
								<line
									x1="60.1"
									y1="60.1"
									x2="82.7"
									y2="82.7"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="24"
								></line>
							</svg>
						</div>
					) : (
						<p>send</p>
					)}
				</button>
			</form>
		</>
	)
}
