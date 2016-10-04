import React from 'react';

class LikesComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {count: 0};
		this.onLike = this.onLike.bind(this);
	}

	onLike() {
		let newLikesCount = this.state.count + 1;
		this.setState({count: newLikesCount});
	}

	render() {
		const plurals = this.state.count > 0 ? 'clicks' : 'click';
		return (
			<div>
				Me gusta: {this.state.count} {plurals}
				<button onClick={this.onLike}>Vamos a tope! {this.props.name} </button> 
			</div>
		);
	}
}

export default LikesComponent;