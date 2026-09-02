import EmbeddedSlides from "main";
import { renderDeck } from "./renderDeck";

export function rebuildDecks(leafContent: HTMLElement, plugin: EmbeddedSlides) {
	const languageBlocks = leafContent.querySelectorAll(
		".block-language-slides",
	);
	for (const block of languageBlocks) {
		// Avoid useless rebuild
		if (block.querySelector("div.reveal-viewport")) return;

		if (!(block instanceof HTMLElement)) return;
		const source = plugin.deckSources.get(block);
		if (!source) return;
		renderDeck(block, source, plugin.app.vault);
	}
}
