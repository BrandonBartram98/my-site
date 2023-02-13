export async function GetFollowerCount() {
	const url = 'https://api.github.com/users/BrandonBartram98/followers'

	const response = await fetch(url)
	const json = await response.json()
	const followerNum = Object.keys(json).length

	return followerNum
}

export async function GetRepoCount() {
	const url = 'https://api.github.com/users/BrandonBartram98/repos'

	const response = await fetch(url)
	const json = await response.json()
	const repoNum = Object.keys(json).length

	return repoNum
}

export async function GetStarCount() {
	const url = 'https://api.github.com/users/BrandonBartram98/starred'

	const response = await fetch(url)
	const json = await response.json()
	const starNum = Object.keys(json).length

	return starNum
}
