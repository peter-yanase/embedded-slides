import Reveal from 'reveal.js';
import { sanitizeHTMLToDom } from 'obsidian';

import type { DeckProperties, ESSettings } from 'const/types';

export async function buildDeck(
	el: HTMLElement,
	contents: string,
	properties: DeckProperties | undefined,
	settings: ESSettings,
) {
	const theme: string = properties?.theme ?? settings.theme;

	const revealDiv = el.createDiv();
	revealDiv.addClasses(['reveal', theme]);

	const slidesDiv = revealDiv.createDiv();
	slidesDiv.addClass('slides');
	slidesDiv.appendChild(sanitizeHTMLToDom(contents));

	const slideNumber =
		(properties?.slideNumber ?? settings.slideNumberVisibility)
			? settings.slideNumberFormat
			: settings.slideNumberVisibility;

	const controlsLayout =
		properties?.controlsLayout ?? settings.controlsLayout;

	const deck = new Reveal(revealDiv, {
		controlsLayout: controlsLayout,
		slideNumber: slideNumber,
		keyboardCondition: 'focused',
		embedded: true,
		viewDistance: 1,
		mobileViewDistance: 1,
		scrollActivationWidth: 0,
	});

	return deck;
}
