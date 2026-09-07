import { ESSettings } from "./types";

export const DEFAULT_SETTINGS: ESSettings = {
	horizontalSeparator: "---",
	verticalSeparator: "--",
	theme: "serif",
};

export const HORIZONTAL_SEPARATOR_PLACEHOLDER = "@@HORIZONTAL_SEPARATOR@@";
export const VERTICAL_SEPARATOR_PLACEHOLDER = "@@VERTICAL_SEPARATOR@@";

export const LANGUAGE = "slides";
export const LANGUAGE_BLOCK = ".block-language-slides";
export const SLIDE_DIV = "div.reveal-viewport";

export const THEMES = [
	"beige",
	"black-contrast",
	"black",
	"blood",
	"dracula",
	"league",
	"moon",
	"night",
	"serif",
	"simple",
	"sky",
	"solarized",
	"white-contrast",
	"white",
] as const;
