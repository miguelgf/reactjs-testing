import React from 'react';
import LikesComponent from './LikesComponent.jsx';

class SnippetComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {title: props.title, text: props.text};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({title: "Titulo pulsado"});
	}

	onChangeInput(e) {
		this.setState({title: e.target.value });
	}

	render() {
		const text = this.state.text;

		return (
			<div>
				<h2 onClick={this.onClick}>{this.state.title}</h2>
				<p><input type="text" value={this.state.title} onChange={this.onChangeInput.bind(this)} /></p>
				<LikesComponent name={text}/>
			</div>
		);
	}
};

export default SnippetComponent; 