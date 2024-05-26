export interface ChatBot {
	history: ChatBotKey[];
	open: boolean;
}

export type ChatBotKey = (typeof ChatBotKeys)[number];

export const ChatBotKeys = [
	'confirmHire',
	'first',
	'hire',
	'looking',
	'other',
	'teachHTMLCSS',
	'teachJS',
	'teachMe',
	'teachSvelte',
] as const;

export type ChatBotAnswers = {
	[key in ChatBotKey]: string[];
};

export interface ChatBotQuestion {
	text: string;
	to: ChatBotKey;
}

export type ChatBotDefaultQuestions = ChatBotQuestion[];

export type ChatBotQuestions = {
	[key in ChatBotKey]: ChatBotQuestion[];
};
