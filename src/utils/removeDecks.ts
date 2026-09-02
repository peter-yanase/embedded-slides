export function removeDecks(leafContent: HTMLElement) {
	leafContent
		.querySelectorAll(".reveal-viewport")
		.forEach((deck) => deck.remove());
}
