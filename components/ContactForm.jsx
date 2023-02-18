'use client'
import { useState } from 'react'

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false)
	const [loading, setLoading] = useState(false)

	if (submitted) {
		return (
			<div className="text-center">
				<h2 className="text-2xl font-bold">Thanks!</h2>
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
				<p>fill in the form below, I&apos;ll get back to you asap</p>
			</div>
			<form className="flex flex-col gap-4 w-full">
				<label htmlFor="email">
					<input
						className="w-full rounded-md p-2 font-fira"
						required
						placeholder="name@gmail.com"
						type="email"
					/>
				</label>
				<label htmlFor="body">
					<textarea
						rows={4}
						placeholder="your message"
						className="w-full rounded-md p-2 resize-y font-fira"
					/>
				</label>
				<button
					type="submit"
					className="flex justify-center px-2 py-2 bg-black rounded-md text-white text-center"
				>
					{loading ? (
						<span className="loader">
							<svg
								className="h-6 w-6 animate-spin stroke-black"
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
						</span>
					) : (
						<p>send</p>
					)}
				</button>
			</form>
		</>
	)
}
