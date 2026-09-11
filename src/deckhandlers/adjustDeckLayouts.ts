import type EmbeddedSlides from 'main';
import { deckHasHeight } from '../utils/deckHasHeight';

export async function adjustDeckLayouts(plugin: EmbeddedSlides) {
	window.requestAnimationFrame(() => {
		for (const deck of plugin.deckInstances.values()) {
			const initalized = deckHasHeight(deck);
			if (initalized) {
				deck.layout();
			}
		}
	});
}
