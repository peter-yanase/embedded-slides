import { type App, Component, MarkdownRenderer } from 'obsidian';

export async function renderMarkdown(text: string, app: App): Promise<string> {
	const throwawayDiv: HTMLElement = createDiv();
	const emptyPath: string = '';
	const dummyComponent: Component = new Component();
	await MarkdownRenderer.render(
		app,
		text,
		throwawayDiv,
		emptyPath,
		dummyComponent,
	);
	return throwawayDiv.getHTML();
}
