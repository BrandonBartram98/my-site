export const getPlayerSummaries = () => {
	const playersummaries_endpoint = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_TOKEN}&steamids=${process.env.STEAM_ID}`
	return fetch(playersummaries_endpoint, {
		method: 'GET',
	})
}

export default async function handler(req, res) {
	const response = await getPlayerSummaries()

	if (response.status != 200) {
		return res.status(200).json({
			steam: {
				personastate: 'Offline',
			},
		})
	}

	const steam = await response.json()
	if (steam.item === null) {
		return res.status(200).json({
			steam: {
				personastate: 'Offline',
			},
		})
	}
	const getPersonName = steam.response.players[0].personaname
	const getAvatar = steam.response.players[0].avatarfull
	const getStatus =
		steam.response.players[0].personastate === 1
			? 'Online'
			: steam.response.players[0].personastate === 2
			? 'Busy'
			: steam.response.players[0].personastate === 3
			? 'Away'
			: 'Offline'
	const getprofileUrl = steam.response.players[0].profileurl
	return res.status(200).json({
		getPersonName,
		getAvatar,
		getStatus,
		getprofileUrl,
	})
}
