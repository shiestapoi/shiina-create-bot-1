import { ChatGPTAPI } from 'chatgpt'
const { Configuration, OpenAIApi } = require('openai');

// Open AI API Key
const OPENAI_API_KEY = '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';

// ChatGPT Client
exports.chatgpt = new ChatGPTAPI({
	apiKey: OPENAI_API_KEY,
});

// OpenAI Client
exports.openai = new OpenAIApi(
	new Configuration({
		apiKey: OPENAI_API_KEY,
	})
);
