import Reveal, { type RevealApi, type RevealConfig } from 'reveal.js';
import { sanitizeHTMLToDom } from 'obsidian';

import type { DeckProperties, ESSettings } from 'const/types';

export async function buildDeck(
	el: HTMLElement,
	contents: string,
	properties: DeckProperties | undefined,
	settings: ESSettings,
): Promise<RevealApi> {
	const theme: string =
		properties?.theme !== undefined ? properties.theme : settings.theme;

	const revealDiv: HTMLElement = el.createDiv();
	revealDiv.addClasses(['reveal', theme]);

	const slidesDiv: HTMLElement = revealDiv.createDiv();
	slidesDiv.addClass('slides');
	slidesDiv.appendChild(sanitizeHTMLToDom(contents));

	const slideNumber: RevealConfig['slideNumber'] =
		properties?.slideNumber !== undefined
			? properties.slideNumber
			: settings.slideNumberVisibility === true
				? settings.slideNumberFormat
				: settings.slideNumberVisibility;

	const controlsLayout: RevealConfig['controlsLayout'] =
		properties?.controlsLayout !== undefined
			? properties.controlsLayout
			: settings.controlsLayout;

	const deck: RevealApi = new Reveal(revealDiv, {
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
