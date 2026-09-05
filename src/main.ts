import { Plugin } from "obsidian";

import { injectStyles } from "./utils/injectStyles";
import { removeStyles } from "./utils/removeStyles";
import { handleLeafChange } from "./utils/handleLeafChange";
import { renderDeck } from "./utils/renderDeck";
import { addMdWrapper } from "utils/addMdWrapper";

export default class EmbeddedSlides extends Plugin {
	deckSources = new WeakMap<HTMLElement, string>();

	async onload() {
		injectStyles();

		this.registerMarkdownCodeBlockProcessor(
			"slides",
			async (source: string, el: HTMLElement) => {
				const wrappedSource = addMdWrapper(source);
				this.deckSources.set(el, wrappedSource);
				await renderDeck(el, wrappedSource, this.app.vault);
			},
		);

		this.app.workspace.on("active-leaf-change", async () => {
			await handleLeafChange(this);
		});
	}

	onunload(): void {
		removeStyles();
	}
}
