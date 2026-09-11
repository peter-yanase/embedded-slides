import { Plugin } from 'obsidian';
import { RevealApi } from 'reveal.js';

import type { ESSettings } from 'const/types';
import { ESSettingTab } from 'ui/ESSettingTab';
import { buildDeck } from './deckhandlers/buildDeck';
import { preprocessContent } from 'utils/preprocessContent';
import { DEFAULT_SETTINGS, LANGUAGE } from 'const/constants';
import { adjustDeckLayouts } from 'deckhandlers/adjustDeckLayouts';
import { getYaml } from 'utils/getYaml';
import { toggleDecks } from 'deckhandlers/toggleDecks';

export default class EmbeddedSlides extends Plugin {
	declare settings: ESSettings;
	deckInstances = new Map<HTMLElement, RevealApi>();

	async onload() {
		await this.loadSettings();

		this.addSettingTab(new ESSettingTab(this.app, this));

		this.registerMarkdownCodeBlockProcessor(
			LANGUAGE,
			async (source, el) => {
				const yaml = getYaml(source);

				const preprocessedContent = await preprocessContent(
					source,
					this,
				);

				const deck = await buildDeck(
					el,
					preprocessedContent,
					yaml,
					this.settings,
				);

				await deck.initialize();

				this.deckInstances.set(el, deck);
			},
		);

		this.registerEvent(
			this.app.workspace.on('active-leaf-change', async () => {
				await toggleDecks(this);
			}),
		);

		this.registerEvent(
			this.app.workspace.on('resize', async () => {
				await adjustDeckLayouts(this);
			}),
		);
	}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			(await this.loadData()) as ESSettings,
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
