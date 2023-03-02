/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: [
			'i.scdn.co',
			'avatars.akamai.steamstatic.com',
			'media.steampowered.com',
		],
	},
}

module.exports = nextConfig
