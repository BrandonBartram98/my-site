export const getRecentlyPlayed = () => {
	const playerrecent_endpoint = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${process.env.STEAM_TOKEN}&steamid=${process.env.STEAM_ID}&count=1`
	return fetch(playerrecent_endpoint, {
		method: 'GET',
	})
}

export default async function handler(req, res) {
	console.log('Getting Steam Recent Data...')

	const response = await getRecentlyPlayed()

	if (response.status != 200) {
		return res.status(200).json({
			steam: {
				games: '',
			},
		})
	}

	const steam = await response.json()
	if (steam.item === null) {
		return res.status(200).json({
			steam: {
				games: '',
			},
		})
	}
	const getAppID = steam.response.games[0].appid
	const getGameName = steam.response.games[0].name
	const getIcon = steam.response.games[0].img_icon_url
	const getPlaytime = steam.response.games[0].playtime_forever
	return res.status(200).json({
		getAppID,
		getGameName,
		getIcon,
		getPlaytime,
	})
}
