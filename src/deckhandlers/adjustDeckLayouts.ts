import type EmbeddedSlides from 'main';
import { deckHasHeight } from '../utils/deckHasHeight';

export async function adjustDeckLayouts(
	plugin: EmbeddedSlides,
): Promise<void> {
	window.requestAnimationFrame(() => {
		for (const deck of plugin.deckInstances.values()) {
			const initalized: boolean = deckHasHeight(deck);
			if (initalized === true) {
				deck.layout();
			}
		}
	});
}
