/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['i.scdn.co'],
	},
}

module.exports = nextConfig
