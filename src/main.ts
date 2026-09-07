import { Plugin } from "obsidian";

import { handleLeafChange } from "./utils/handleLeafChange";
import { renderDeck } from "./deckhandlers/renderDeck";
import { preprocess } from "preprocessors/preprocess";
import { DEFAULT_SETTINGS, LANGUAGE } from "const/constants";
import { ESSettingTab } from "ui/settings";
import { ESSettings } from "const/types";

export default class EmbeddedSlides extends Plugin {
	declare settings: ESSettings;
	deckSources = new WeakMap<HTMLElement, string>();

	async onload() {
		await this.loadSettings();

		this.addSettingTab(new ESSettingTab(this.app, this));

		this.registerMarkdownCodeBlockProcessor(
			LANGUAGE,
			async (source: string, el: HTMLElement) => {
				this.deckSources.set(el, await preprocess(source, this));
				await renderDeck(el, this);
			},
		);

		this.app.workspace.on("active-leaf-change", async () => {
			await handleLeafChange(this);
		});
	}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData(),
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
