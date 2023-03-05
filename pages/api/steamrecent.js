export const getRecentlyPlayed = () => {
	const playerrecent_endpoint = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${process.env.STEAM_TOKEN}&steamid=${process.env.STEAM_ID}&count=1`
	return fetch(playerrecent_endpoint, {
		method: 'GET',
	})
}

export default async function handler(req, res) {
	const response = await getRecentlyPlayed()

	if (response.status != 200) {
		return res.status(200).json({
			steam: {
				response: {
					total_count: 1,
					games: {
						appid: 990080,
						name: 'Hogwarts Legacy',
						playtime_2weeks: 67,
						playtime_forever: 466,
						img_icon_url: 'a9ecb94f249768d0ee5ccecbffe8d8c06d9bed59',
					},
				},
			},
		})
	}

	const steam = await response.json()
	if (steam.item === null || steam.response.total_count == 0) {
		const getGameName = 'no recently played'
		const getPlaytime = '0'
		return res.status(200).json({
			getGameName,
			getPlaytime,
		})
	}

	const getGameName = steam.response.games[0].name
	const getPlaytime = steam.response.games[0].playtime_forever
	return res.status(200).json({
		getGameName,
		getPlaytime,
	})
}
