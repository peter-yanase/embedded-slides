import {
	HORIZONTAL_SEPARATOR_MARKER,
	VERTICAL_SEPARATOR_MARKER,
} from 'const/constants';

export function separateSlides(text: string) {
	function convertToRenderedParagraph(text: string) {
		return `<p dir="auto">${text}</p>`;
	}

	function convertToHtmlSection(text: string) {
		return `<section>${text}</section>`;
	}

	return text
		.split(convertToRenderedParagraph(HORIZONTAL_SEPARATOR_MARKER))
		.map((horizontalSlide) => {
			const verticalSlides = horizontalSlide.split(
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
