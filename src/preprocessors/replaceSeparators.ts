import {
	HORIZONTAL_SEPARATOR_MARKER,
	VERTICAL_SEPARATOR_MARKER,
} from 'const/constants';
import type { ESSettings } from 'const/types';
import { convertToMDParagraph } from 'utils/convertToMdParagraph';

export function replaceSeparators(content: string, settings: ESSettings) {
	function replaceSeparator(text: string, separator: string, marker: string) {
		return text.replaceAll(
			new RegExp(separator, 'g'),
			convertToMDParagraph(marker),
		);
	}

	let replaced = content;

	replaced = replaceSeparator(
		replaced,
		settings.horizontalSeparator,
		HORIZONTAL_SEPARATOR_MARKER,
	);

	replaced = replaceSeparator(
		replaced,
		settings.verticalSeparator,
		VERTICAL_SEPARATOR_MARKER,
	);

	return replaced;
}
