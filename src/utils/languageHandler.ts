export test(source: string, el: HTMLElement) {
		let content = source;

		const yaml = getYaml(content);

		const externalSlides = yaml?.slides;
		if (externalSlides) {
			content = await replaceContent(externalSlides, this);
		}

		const preprocessedContent = await preprocessContent(content, this);

		const deck = await buildDeck(
			el,
			preprocessedContent,
			yaml,
			this.settings,
		);

		await deck.initialize();

		this.deckInstances.set(el, deck);
	}
