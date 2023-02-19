import Link from 'next/link'
import getPostData from '@/components/getPostData'
import PostBlock from '@/components/PostBlock'

export default function Blog() {
	const postData = getPostData()
	const postPreviews = postData.map((post) => (
		<PostBlock key={post.slug} {...post} />
	))
	return (
		<main className="max-w-3xl mx-auto pt-8 md:pt-12 px-6 text-white">
			<Link href="/" className="text-xs">
				<div className="flex items-center gap-2 pb-4">
					<svg
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M15 7.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm-8.5 2.707L3.793 7.5 6.5 4.793l.707.707-1.5 1.5H11v1H5.707l1.5 1.5-.707.707z"
							fill="currentColor"
						></path>
					</svg>
					<p>return</p>
				</div>
			</Link>
			<h1 className="text-white pb-8 text-md md:text-2xl">blog</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
				{postPreviews}
			</div>
		</main>
	)
}
