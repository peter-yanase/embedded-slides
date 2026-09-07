import {
	HORIZONTAL_SEPARATOR_PLACEHOLDER,
	VERTICAL_SEPARATOR_PLACEHOLDER,
} from "const/constants";

export function separateSlides(text: string): string {
	const section = (content: string) => `<section>${content}</section>`;
	const separator = (marker: string) => `<p dir="auto">${marker}</p>`;

	return text
		.split(separator(HORIZONTAL_SEPARATOR_PLACEHOLDER))
		.map((horizontalSlide) => {
			const slides = horizontalSlide.split(
				separator(VERTICAL_SEPARATOR_PLACEHOLDER),
			);

			return slides.length === 1
				? section(slides[0] ?? "")
				: section(slides.map(section).join(""));
		})
		.join("");
}
