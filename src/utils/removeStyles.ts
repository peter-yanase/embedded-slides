export function removeStyles() {
	document.head
		.querySelectorAll(".embedded-slides")
		.forEach((style) => style.remove());
}
