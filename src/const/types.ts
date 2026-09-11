export interface ESSettings {
	horizontalSeparator: string;
	verticalSeparator: string;
	theme: string;
	slideNumberVisibility: boolean;
	slideNumberFormat: 'h.v' | 'h/v' | 'c' | 'c/t';
	controlsLayout: 'edges' | 'bottom-right';
}

export interface DeckProperties {
	theme?: string;
	slideNumber?: 'h.v' | 'h/v' | 'c' | 'c/t' | boolean;
	controlsLayout?: 'edges' | 'bottom-right';
}

export interface DeckSource {
	contents: string;
	properties: DeckProperties | undefined;
}
