import { type FrontMatterInfo, getFrontMatterInfo } from 'obsidian';

export function removeFrontmatter(content: string): string {
	const frontMatterInfo: FrontMatterInfo = getFrontMatterInfo(content);

	return frontMatterInfo.exists
		? content.slice(frontMatterInfo.contentStart)
		: content;
}
