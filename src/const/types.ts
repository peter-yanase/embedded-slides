import { THEMES } from "./constants";

export interface ESSettings {
	horizontalSeparator: string;
	verticalSeparator: string;
	theme: Theme;
}

export type Theme = (typeof THEMES)[number];
