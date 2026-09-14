import { HORIZONTAL_SEPARATOR_MARKER } from 'const/constants';
import type EmbeddedSlides from 'main';
import { removeFrontmatter } from 'preprocessors/removeFrontmatter';
import { convertToMDParagraph } from './convertToMdParagraph';

export async function replaceContent(
	wikilinks: string | string[],
	plugin: EmbeddedSlides,
) {
	const links = typeof wikilinks === 'string' ? [wikilinks] : wikilinks;

	let newContent = [];
	for (const link of links) {
		const withoutBrackets = /\[\[(.+?)\]\]/.exec(link);
		if (!withoutBrackets) return 'Use wikilinks.';
		const withoutAlias = withoutBrackets[1]?.split('|')[0] ?? '';
		const path = `${withoutAlias}.md`;
		const vault = plugin.app.vault;
		const file =
			vault.getFileByPath(path) ??
			vault.getFiles().find((file) => file.name === path);
		if (!file) return `File not found:\n${path}`;
		newContent.push(removeFrontmatter(await vault.cachedRead(file)));
	}

	return newContent.join(convertToMDParagraph(HORIZONTAL_SEPARATOR_MARKER));
}
