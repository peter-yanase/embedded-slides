import Reveal from "reveal.js";
import { sanitizeHTMLToDom } from "obsidian";

import type EmbeddedSlides from "main";

export async function renderDeck(el: HTMLElement, plugin: EmbeddedSlides) {
	let theme = plugin.settings.theme;

	// TODO: Feed custom themes here

	const revealViewportDiv = el.createDiv({
		cls: `reveal-viewport ${theme}`,
	});
	const revealDiv = revealViewportDiv.createDiv({ cls: "reveal" });

	revealDiv
		.createDiv({ cls: "slides" })
		.appendChild(sanitizeHTMLToDom(plugin.deckSources.get(el) ?? ""));

	// TODO: Feed custom rendering arguments here

	const deck = new Reveal(revealDiv, {
		controlsLayout: "edges",
		slideNumber: "c/t",
		hash: true,
		keyboardCondition: "focused",
		embedded: true,
		pdfSeparateFragments: false,
		viewDistance: 1,
		mobileViewDistance: 1,
		width: "100%",
	});

	await deck.initialize();
}
