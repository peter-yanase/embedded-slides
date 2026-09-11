export const DEFAULT_SETTINGS = {
	horizontalSeparator: '\n---\n',
	verticalSeparator: '\n--\n',
	theme: 'black',
	controlsLayout: 'edges',
	slideNumberVisibility: true,
	slideNumberFormat: 'c/t',
};

export const HORIZONTAL_SEPARATOR_MARKER = '@@HORIZONTAL_SEPARATOR@@';
export const VERTICAL_SEPARATOR_MARKER = '@@VERTICAL_SEPARATOR@@';

export const LANGUAGE = 'slides';
export const LANGUAGE_BLOCK = 'div.block-language-slides';

export const THEMES = [
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

export const CONTROLS_LAYOUT = ['edges', 'bottom-right'];

export const SLIDE_NUMBER_FORMAT = {
	'h.v': 'horizontal . vertical',
	'h/v': 'horizontal / vertical',
	c: 'flattened count',
	'c/t': 'flattened count / total',
};
