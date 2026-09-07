import {
	HORIZONTAL_SEPARATOR_PLACEHOLDER,
	VERTICAL_SEPARATOR_PLACEHOLDER,
} from "const/constants";
import { Component, MarkdownRenderer } from "obsidian";
import { separateSlides } from "./separateSlides";
import type EmbeddedSlides from "main";

export async function preprocess(text: string, plugin: EmbeddedSlides) {
	let preprocessedText: string = text;

	// 1. Replace slide separators with placeholders
	preprocessedText = preprocessedText
		.replaceAll(
			new RegExp(`${plugin.settings.horizontalSeparator}`, "g"),
			HORIZONTAL_SEPARATOR_PLACEHOLDER,
		)
		.replaceAll(
			new RegExp(`${plugin.settings.verticalSeparator}`, "g"),
			VERTICAL_SEPARATOR_PLACEHOLDER,
		);

	// 2. Process Markdown with Obsidian
	const throwawayDiv = createDiv();
	const emptyPath = "";
	const dummyComponent = new Component();
	await MarkdownRenderer.render(
		plugin.app,
		preprocessedText,
		throwawayDiv,
		emptyPath,
		dummyComponent,
	);
	preprocessedText = throwawayDiv.getHTML();

	// 3. Replace placeholder slide separators
	preprocessedText = separateSlides(preprocessedText);

	// 4. TODO: Custom preprocessing comes here

	return preprocessedText;
}
