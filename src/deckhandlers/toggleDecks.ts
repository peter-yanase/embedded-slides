import { type WorkspaceLeaf } from 'obsidian';

import type EmbeddedSlides from 'main';
import { LANGUAGE_BLOCK } from 'const/constants';
import { type RevealApi } from 'reveal.js';
import { deckHasHeight } from 'utils/deckHasHeight';

export async function toggleDecks(plugin: EmbeddedSlides): Promise<void> {
	if (plugin.app.workspace.layoutReady === false) return;

	const rootLeaves: Set<WorkspaceLeaf> = new Set();
	plugin.app.workspace.iterateRootLeaves((rootLeaf) => {
		rootLeaves.add(rootLeaf);
	});

	for (const rootLeaf of rootLeaves) {
		const { containerEl } = rootLeaf.view;

		const blocks: NodeListOf<HTMLElement> =
			containerEl.querySelectorAll<HTMLElement>(LANGUAGE_BLOCK);

		if (blocks.length === 0) return;

		const isHidden: boolean =
			containerEl.parentElement?.style.display === 'none';

		for (const block of blocks) {
			const deck = plugin.deckInstances.get(block);
			if (deck === undefined) continue;

			if (isHidden === true) {
				deck?.destroy();
			} else if (isHidden === false && deckHasHeight(deck) === false) {
				await deck.initialize();
			}
		}
	}
}
