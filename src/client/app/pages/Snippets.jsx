import React from 'react';
import SnippetComponent from '../components/SnippetComponent.jsx';
import SnippetStore from '../stores/SnippetStore.jsx'
import SnippetActions from '../actions/SnippetActions.js';

class Snippets extends React.Component {

	constructor() {
		super();
		this.renderSnippets = this.renderSnippets.bind(this);

		this.state = {
			snippets: SnippetStore.getAll()
		};

	}

	componentWillMount() {
		SnippetStore.on("change", this.renderSnippets);		
	}

	componentWillUnmount() {
		SnippetStore.removeListener("change", this.renderSnippets);		
	}

	renderSnippets() {
		this.setState({
			snippets: SnippetStore.getAll()
		});
	}

	createSnippet() {
		SnippetActions.createSnippet(Date.now(), "Textito");
	}

	reloadSnippets() {
		SnippetActions.reloadSnippets();
	}	

	render() {

		const { snippets } = this.state;

		const elements = snippets.map(function(element, index) { 
			return <SnippetComponent key={element[0]} title={element[1]} text={element[2]} /> 
		});

		return (
			<div>
				<h2>Snippets!</h2>
				<button class="btn" onClick={this.createSnippet.bind(this)}>Create!</button>
				<button class="btn" onClick={this.reloadSnippets.bind(this)}>Reload this shit!</button>
				{elements}
			</div>
		)
	}
};

export default Snippets;