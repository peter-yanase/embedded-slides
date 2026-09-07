import {
	HORIZONTAL_SEPARATOR_MARKER,
	VERTICAL_SEPARATOR_MARKER,
} from 'const/constants';

export function separateSlides(text: string): string {
	function convertToRenderedParagraph(text: string): string {
		return `<p dir="auto">${text}</p>`;
	}

	function convertToHtmlSection(text: string): string {
		return `<section>${text}</section>`;
	}

	return text
		.split(convertToRenderedParagraph(HORIZONTAL_SEPARATOR_MARKER))
		.map((horizontalSlide) => {
			const verticalSlides: string[] = horizontalSlide.split(
				convertToRenderedParagraph(VERTICAL_SEPARATOR_MARKER),
			);

			return convertToHtmlSection(
				verticalSlides.length === 1
					? (verticalSlides[0] ?? '')
					: verticalSlides
							.map((verticalSlide) =>
								convertToHtmlSection(verticalSlide),
							)
							.join(''),
			);
		})
		.join('');
}
