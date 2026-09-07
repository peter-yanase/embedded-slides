import { type FrontMatterInfo, getFrontMatterInfo, parseYaml } from 'obsidian';

import type { DeckProperties } from 'const/types';

export function getYaml(text: string): DeckProperties | undefined {
	const frontMatterInfo: FrontMatterInfo = getFrontMatterInfo(text);

	return frontMatterInfo.exists
		? (parseYaml(frontMatterInfo.frontmatter) as DeckProperties)
		: undefined;
}
