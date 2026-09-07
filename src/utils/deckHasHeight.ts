import { RevealApi } from 'reveal.js';

export function deckHasHeight(deck: RevealApi) {
	return deck.getComputedSlideSize().presentationHeight !== 0;
}
