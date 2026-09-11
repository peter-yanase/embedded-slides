import { type App, Component, MarkdownRenderer } from 'obsidian';

export async function renderMarkdown(text: string, app: App) {
	const throwawayDiv = createDiv();
	const emptyPath = '';
	const dummyComponent = new Component();
	await MarkdownRenderer.render(
		app,
		text,
		throwawayDiv,
		emptyPath,
		dummyComponent,
	);
	return throwawayDiv.getHTML();
}
