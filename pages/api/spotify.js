const client_id = process.env.SPOTIFY_ID
const client_secret = process.env.SPOTIFY_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH

const getAccessToken = async () => {
	console.log('Getting Spotify Access Token...')
	const refresh_token = process.env.SPOTIFY_REFRESH
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${process.env.SPOTIFY_ID}:${process.env.SPOTIFY_SECRET}`
			).toString('base64')}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token,
		}),
	})

	return response.json()
}

export const currentlyPlayingSong = async () => {
	const { access_token } = await getAccessToken()

	return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
}

export const getPlaylist = async () => {
	const { access_token } = await getAccessToken()

	return fetch(
		'https://api.spotify.com/v1/playlists/4FKL1mD79QAm4h3GWktFcy?si=5dd9eb7a90014d5c',
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}
	)
}

export default async function handler(req, res) {
	const response = await currentlyPlayingSong()

	if (response.status === 204 || response.status > 400) {
		return res.status(200).json({ isPlaying: false })
	}

	const song = await response.json()

	if (song.item === null) {
		return res.status(200).json({ isPlaying: false })
	}

	const isPlaying = song.is_playing
	const title = song.item.name
	const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
	const album = song.item.album.name
	const albumImageUrl = song.item.album.images[0].url
	const songUrl = song.item.external_urls.spotify

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=60, stale-while-revalidate=30'
	)

	return res.status(200).json({
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
	})
}
