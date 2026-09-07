import {
	PluginSettingTab,
	type App,
	type SettingDefinitionItem,
} from 'obsidian';

import type EmbeddedSlides from 'main';
import {
	CONTROLS_LAYOUT,
	DEFAULT_SETTINGS,
	SLIDE_NUMBER_FORMAT,
	THEMES,
} from 'const/constants';

export class ESSettingTab extends PluginSettingTab {
	plugin: EmbeddedSlides;

	constructor(app: App, plugin: EmbeddedSlides) {
		super(app, plugin);
		this.plugin = plugin;
	}

	private separatorDesc =
		'Input custom regex to search for. (Use double backslashes for escaping special characters.)';

	getSettingDefinitions(): SettingDefinitionItem[] {
		return [
			{
				name: 'Horizontal slide separator',
				desc: this.separatorDesc,
				control: {
					type: 'text',
					key: 'horizontalSeparator',
					placeholder: DEFAULT_SETTINGS.horizontalSeparator,
				},
			},
			{
				name: 'Vertical slide separator',
				desc: this.separatorDesc,
				control: {
					type: 'text',
					key: 'verticalSeparator',
					placeholder: DEFAULT_SETTINGS.verticalSeparator,
				},
			},
			{
				name: 'Theme',
				control: {
					type: 'dropdown',
					key: 'theme',
					defaultValue: DEFAULT_SETTINGS.theme,
					options: Object.fromEntries(
						THEMES.map((theme) => [theme, theme]),
					),
				},
			},
			{
				name: 'Controls layout',
				control: {
					type: 'dropdown',
					key: 'controlsLayout',
					defaultValue: DEFAULT_SETTINGS.controlsLayout,
					options: Object.fromEntries(
						CONTROLS_LAYOUT.map((layout) => [layout, layout]),
					),
				},
			},
			{
				name: 'Slide number visibility',
				control: {
					type: 'toggle',
					key: 'slideNumberVisibility',
					defaultValue: DEFAULT_SETTINGS.slideNumberVisibility,
				},
			},
			{
				name: 'Slide number format',
				control: {
					type: 'dropdown',
					key: 'slideNumberFormat',
					defaultValue: DEFAULT_SETTINGS.slideNumberFormat,
					options: SLIDE_NUMBER_FORMAT,
				},
			},
		];
	}
}
