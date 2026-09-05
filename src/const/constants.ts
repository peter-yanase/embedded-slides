export const wikilink = new RegExp(
	["!\\[\\[(?<path>.+?)(?:\\|(?<alt>.*?))?\\]\\]"].join(""),
	"g",
);

export const mdRuby = new RegExp("{(.+?)\\|(.+?)}", "g");

export const imageExtensions = [
	"bmp",
	"png",
	"jpg",
	"jpeg",
	"gif",
	"svg",
	"webp",
	"avif",
];

export const audioExtensions = [
	"mp3",
	"wav",
	"m4a",
	"3gp",
	"flac",
	"ogg",
	"oga",
	"opus",
];

export const videoExtensions = ["mp4", "webm", "ogv", "mov", "mkv"];
