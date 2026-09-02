import { BEIGE_CSS, REVEAL_CSS } from "../const/themes";

export function injectStyles() {
	for (const css of [REVEAL_CSS, BEIGE_CSS]) {
		const style = document.createElement("style");
		style.addClass("embedded-slides");
		style.textContent = css;
		document.head.appendChild(style);
	}
}
