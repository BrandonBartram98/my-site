// import { Configuration, OpenAIApi } from 'openai'

// if (!process.env.OPENAI_API_KEY) {
// 	throw new Error('Missing API-Key from OpenAI')
// }
// const configuration = new Configuration({
// 	apiKey: process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration)

// const generateAction = async (req, res) => {
// 	const completion = await openai.createChatCompletion({
// 		model: 'gpt-3.5-turbo',
// 		messages: [
// 			{
// 				role: 'system',
// 				content: 'You are an assistant that speaks like Shakespeare.',
// 			},
// 			{
// 				role: 'user',
// 				content: `${req.body.userInput}`,
// 			},
// 		],
// 		temperature: 0.7,
// 		max_tokens: 300,
// 		stream: true,
// 	})

// 	const gptOutput = completion.data.choices.pop()

// 	res.status(200).json({ output: gptOutput })
// }

// export default generateAction
