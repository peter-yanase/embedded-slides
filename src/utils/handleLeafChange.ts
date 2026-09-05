import { MarkdownView } from "obsidian";

import { removeDecks } from "./removeDecks";
import { rebuildDecks } from "./rebuildDecks";
import EmbeddedSlides from "main";

export async function handleLeafChange(plugin: EmbeddedSlides) {
	if (!plugin.app.workspace.layoutReady) return;
	const leaves = plugin.app.workspace.getLeavesOfType("markdown");
	for (const leaf of leaves) {
		const { view } = leaf;
		if (!(view instanceof MarkdownView)) continue;
		const leafContent = view.containerEl;
		const { parentElement } = leafContent;

		// Remove or rebuild decks based on visibility to save resources
		if (parentElement?.style.display === "none") {
			removeDecks(leafContent);
		} else {
			await rebuildDecks(leafContent, plugin);
		}
	}
}
