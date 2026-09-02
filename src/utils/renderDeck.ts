import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown";
import { sanitizeHTMLToDom, Vault } from "obsidian";

import { getCustomRenderer } from "./customRenderer";

export function renderDeck(el: HTMLElement, source: string, vault: Vault) {
	const revealViewportDiv = el.createDiv({
		cls: "reveal-viewport",
	});
	const revealDiv = revealViewportDiv.createDiv({ cls: "reveal" });
	revealDiv
		.createDiv({ cls: "slides" })
		.appendChild(sanitizeHTMLToDom(source));

	const deck = new Reveal(revealDiv, {
		controlsLayout: "edges",
		slideNumber: "c/t",
		hash: true,
		keyboardCondition: "focused",
		embedded: true,
		pdfSeparateFragments: false,
		viewDistance: 3,
		mobileViewDistance: 3,
		width: "100%",
		plugins: [Markdown],
		markdown: {
			renderer: getCustomRenderer(vault),
		},
	});

	deck.initialize();
}
