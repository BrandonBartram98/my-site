import Link from 'next/link'

export default function PostBlock(props) {
	return (
		<Link
			href={`/posts/${props.slug}`}
			className="flex flex-col gap-2 bg-white rounded-xl p-4 hover:scale-95 transition-all duration-300"
		>
			<h2 className="text-lg font-semibold">{props.title}</h2>
			<div>
				<p>{props.subtitle}</p>
				<p className="text-xs">{props.date}</p>
			</div>
		</Link>
	)
}
