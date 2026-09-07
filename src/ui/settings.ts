import { DEFAULT_SETTINGS, THEMES } from "const/constants";
import type EmbeddedSlides from "main";
import {
	type App,
	PluginSettingTab,
	type SettingDefinitionItem,
} from "obsidian";

export class ESSettingTab extends PluginSettingTab {
	plugin: EmbeddedSlides;

	constructor(app: App, plugin: EmbeddedSlides) {
		super(app, plugin);
		this.plugin = plugin;
	}

	private preProcessing: SettingDefinitionItem = {
		type: "group",
		heading: "Separators",
		items: [
			{
				name: "Horizontal separator",
				control: {
					type: "text",
					key: "horizontalSeparator",
					placeholder: DEFAULT_SETTINGS.horizontalSeparator,
				},
			},
			{
				name: "Vertical separator",
				control: {
					type: "text",
					key: "verticalSeparator",
					placeholder: DEFAULT_SETTINGS.verticalSeparator,
				},
			},
		],
	};

	private postProcessing: SettingDefinitionItem = {
		type: "group",
		heading: "Postprocessing",
		items: [
			{
				name: "Default theme",
				control: {
					type: "dropdown",
					key: "theme",
					defaultValue: DEFAULT_SETTINGS.theme,
					options: Object.fromEntries(
						THEMES.map((theme) => [theme, theme]),
					),
				},
			},
		],
	};

	getSettingDefinitions(): SettingDefinitionItem[] {
		return [this.preProcessing, this.postProcessing];
	}
}
