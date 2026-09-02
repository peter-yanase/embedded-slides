export function addMdWrapper(source: string) {
	return [
		'<section data-markdown data-separator-vertical="^--\n">',
		"<textarea data-template>",
		`${source}`,
		"</textarea>",
		"</section>",
	].join("\n");
}
