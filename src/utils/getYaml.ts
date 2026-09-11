import { getFrontMatterInfo, parseYaml } from 'obsidian';

import type { DeckProperties } from 'const/types';

export function getYaml(text: string) {
	const frontMatterInfo = getFrontMatterInfo(text);

	return frontMatterInfo.exists
		? (parseYaml(frontMatterInfo.frontmatter) as DeckProperties)
		: undefined;
}
