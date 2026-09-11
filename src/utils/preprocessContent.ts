import type EmbeddedSlides from 'main';
import { renderMarkdown } from '../preprocessors/renderMarkdown';
import { removeFrontmatter } from '../preprocessors/removeFrontmatter';
import { replaceSeparators } from '../preprocessors/replaceSeparators';
import { separateSlides } from '../preprocessors/separateSlides';

export async function preprocessContent(
	original: string,
	plugin: EmbeddedSlides,
) {
	let preprocessed = original;

	preprocessed = removeFrontmatter(preprocessed);

	preprocessed = replaceSeparators(preprocessed, plugin.settings);

	preprocessed = await renderMarkdown(preprocessed, plugin.app);

	preprocessed = separateSlides(preprocessed);

	return preprocessed;
}
