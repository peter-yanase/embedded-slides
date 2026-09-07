import { RevealConfig } from 'reveal.js';

export interface ESSettings {
	horizontalSeparator: string;
	verticalSeparator: string;
	theme: string;
	slideNumberVisibility: boolean;
	slideNumberFormat: 'h.v' | 'h/v' | 'c' | 'c/t';
	controlsLayout: RevealConfig['controlsLayout'];
}

export interface DeckProperties {
	theme?: string;
	slideNumber?: RevealConfig['slideNumber'];
	controlsLayout?: RevealConfig['controlsLayout'];
}

export type DeckSource = {
	contents: string;
	properties: DeckProperties | undefined;
};
