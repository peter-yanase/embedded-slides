import { SLIDE_DIV } from "const/constants";

export function removeDecks(leafContent: HTMLElement) {
	leafContent.querySelectorAll(SLIDE_DIV).forEach((deck) => deck.remove());
}
