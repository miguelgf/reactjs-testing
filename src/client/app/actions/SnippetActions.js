import dispatcher from '../dispatcher.js';

export default {
	createSnippet(title, text) {
		dispatcher.dispatch({
			type: 'CREATE_SNIPPET',
			title,
			text
		});
	},

	deleteSnippet(id) {
		dispatcher.dispatch({
			type: 'DELETE_SNIPPET',
			id
		});
	},

	reloadSnippets() {
		dispatcher.dispatch({type: "FETCH_SNIPPETS"});

		// axios("").then(function(data) {
		// 	console.log("got the data, motherfucker!", data);
		// };

		setTimeout(() => {
			dispatcher.dispatch({type: "RECEIVED_SNIPPETS", data: [[100, "Cien", "doscientos"]]});
		}, 1000);
	}
}