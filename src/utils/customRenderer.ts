import {
	audioExtensions,
	imageExtensions,
	videoExtensions,
	wikilink,
} from "const/constants";
import { TFile, Vault } from "obsidian";

export function getCustomRenderer(vault: Vault) {
	return {
		text(token: { text: string }) {
			return (
				token.text
					// Wikilinks to local media files
					.replace(wikilink, (match, ...args) => {
						const groups = args.at(-1);
						const { path, alt } = groups;
						const fileCandidate =
							vault.getFileByPath(path) ??
							vault.getFiles().find((file) => file.name === path);
						if (fileCandidate instanceof TFile) {
							const file = fileCandidate;
							const uri = vault.getResourcePath(file);
							const { extension } = file;
							const html: string[] = [];
							if (imageExtensions.contains(extension)) {
								html.push(`<img src="${uri}">`);
							} else if (videoExtensions.contains(extension)) {
								html.push(
									"<video controls>",
									`<source src="${uri}" >`,
									"</video>",
								);
							} else if (audioExtensions.contains(extension)) {
								html.push(
									"<audio controls>",
									`<source src="${uri}">`,
									"</audio>",
								);
							}
							if (alt) {
								html.unshift("<figure>");
								html.push(
									`<figcaption>${alt}</figcaption>`,
									"</figure>",
								);
							}
							return html.join("\n");
						}
						return match;
					})

					// Ruby
					.replace("{(.+?)\|(.+?)}", "<ruby>$1<rt>$2</rt></ruby>")
			);
		},
	};
}
