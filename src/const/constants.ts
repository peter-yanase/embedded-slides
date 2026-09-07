import { ESSettings } from './types';

export const DEFAULT_SETTINGS: ESSettings = {
	horizontalSeparator: '\n---\n',
	verticalSeparator: '\n--\n',
	theme: 'black',
	controlsLayout: 'edges',
	slideNumberVisibility: true,
	slideNumberFormat: 'c/t',
};

export const HORIZONTAL_SEPARATOR_MARKER: string = '@@HORIZONTAL_SEPARATOR@@';
export const VERTICAL_SEPARATOR_MARKER: string = '@@VERTICAL_SEPARATOR@@';

export const LANGUAGE: string = 'slides';
export const LANGUAGE_BLOCK: string = 'div.block-language-slides';

export const THEMES: string[] = [
	'beige',
	'black-contrast',
	'black',
	'blood',
	'dracula',
	'league',
	'moon',
	'night',
	'serif',
	'simple',
	'sky',
	'solarized',
	'white-contrast',
	'white',
];

export const CONTROLS_LAYOUT: string[] = ['edges', 'bottom-right'];

export const SLIDE_NUMBER_FORMAT: Record<string, string> = {
	'h.v': 'horizontal . vertical',
	'h/v': 'horizontal / vertical',
	c: 'flattened count',
	'c/t': 'flattened count / total',
};
