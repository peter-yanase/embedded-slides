import type EmbeddedSlides from "main";
import { renderDeck } from "./renderDeck";
import { LANGUAGE_BLOCK, SLIDE_DIV } from "const/constants";

export async function rebuildDecks(
	leafContent: HTMLElement,
	plugin: EmbeddedSlides,
) {
	for (const block of leafContent.querySelectorAll(LANGUAGE_BLOCK)) {
		// Avoid useless rebuild
		if (block.querySelector(SLIDE_DIV)) return;

		if (!block.instanceOf(HTMLElement)) return;

		await renderDeck(block, plugin);
	}
}
