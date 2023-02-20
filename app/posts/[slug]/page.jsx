import getPostData from '@/components/getPostData'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'

const getPostContent = (slug) => {
	const folder = 'posts/'
	const file = `${folder}${slug}.md`
	const content = fs.readFileSync(file, 'utf8')
	const matterResult = matter(content)

	return matterResult
}

export const generateStaticParams = async () => {
	const posts = getPostData()
	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export default function Post(props) {
	const slug = props.params.slug
	const post = getPostContent(slug)
	return (
		<div className="max-w-3xl mx-auto pt-8 md:pt-12 px-6 text-white bg-zinc-900 pb-12">
			<Link href="/blog" className="text-xs">
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
			<h1 className="text-2xl pb-4">{post.data.title}</h1>
			<Markdown className="prose lg:prose-xl prose-code:text-white prose-headings:text-white prose-p:text-white prose-a:text-cyan-200 prose-strong:text-white prose-ul:text-white prose-li:text-white">
				{post.content}
			</Markdown>
		</div>
	)
}
