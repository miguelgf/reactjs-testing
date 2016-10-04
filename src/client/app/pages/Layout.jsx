import React from 'react';
import Nav from '../components/layout/Nav.jsx';

class Layout extends React.Component {
	render() {
		const { location } = this.props;

		return (
			<div>
				<h1>APP</h1>
				
				<Nav current={location} />

				<div class="jumbotron">
					{this.props.children}
				</div>
			</div>
		)
	}
};

export default Layout;