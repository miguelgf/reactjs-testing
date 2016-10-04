import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js"

class SnippetStore extends EventEmitter {

	constructor() {
		super();

		this.snippets = [
			[1, "Snippet numero 1", "Locuron del verano"],
			[2, "Titulo 2", "Locuron del invierno"],
		];

	}

	createSnippet(title, text) {
		const id = Date.now();

		this.snippets.push([id, title, text]);

		this.emit("change");
	}

	getAll() {
		console.log("getAll returning:", this.snippets);
		return this.snippets;
	}

	handleActions(action) {
		console.log("SnippetStore received: ", action);

		switch (action.type) {
			case 'CREATE_SNIPPET':
				this.createSnippet(action.title, action.text);
			break;

			case 'RECEIVED_SNIPPETS':
				console.log(this.snippets);
				this.snippets = action.data;
				console.log(this.snippets);
				this.emit("change");
			break;			
		}
	}
}

const snippetStore = new SnippetStore;
dispatcher.register(snippetStore.handleActions.bind(snippetStore));
// window.snippetStore = snippetStore;

window.dispatcher = dispatcher;

export default snippetStore;