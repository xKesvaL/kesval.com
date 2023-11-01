export const CHATBOT_KEYS = ['first', 'base', 'hire', 'confirmHire'] as const;

export type ChatbotKey = (typeof CHATBOT_KEYS)[number];

export interface ChatbotQuestion {
	answer: ChatbotKey;
	text: string;
}

export interface Chatbot {
	history: ChatbotKey[];
	open: boolean;
}

const chatbotDefaultQuestions: ChatbotQuestion[] = [];

export const chatbotQuestions: Record<ChatbotKey, ChatbotQuestion[]> = {
	base: chatbotDefaultQuestions,
	confirmHire: chatbotDefaultQuestions,
	first: chatbotDefaultQuestions,
	hire: chatbotDefaultQuestions
};
