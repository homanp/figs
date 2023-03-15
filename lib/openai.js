const {Configuration, OpenAIApi} = require('openai');

export const useOpenAi = () => {
	const configuration = new Configuration({
		apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
	});

	const openai = new OpenAIApi(configuration);

	return {openai};
};
