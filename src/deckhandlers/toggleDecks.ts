import { type WorkspaceLeaf } from 'obsidian';

import type EmbeddedSlides from 'main';
import { LANGUAGE_BLOCK } from 'const/constants';
import { deckHasHeight } from 'utils/deckHasHeight';

export async function toggleDecks(plugin: EmbeddedSlides) {
	if (!plugin.app.workspace.layoutReady) return;

	const rootLeaves = new Set<WorkspaceLeaf>();
	plugin.app.workspace.iterateRootLeaves((rootLeaf) => {
		rootLeaves.add(rootLeaf);
	});

	for (const rootLeaf of rootLeaves) {
		const { containerEl } = rootLeaf.view;

		const blocks =
			containerEl.querySelectorAll<HTMLElement>(LANGUAGE_BLOCK);

		if (blocks.length === 0) return;

		const isHidden =
			containerEl.parentElement?.style.display === 'none';

		for (const block of blocks) {
			const deck = plugin.deckInstances.get(block);
			if (deck === undefined) continue;

			if (isHidden) {
				deck.destroy();
			}

			if (!deckHasHeight(deck)) {
				await deck.initialize();
			}
		}
	}
}
