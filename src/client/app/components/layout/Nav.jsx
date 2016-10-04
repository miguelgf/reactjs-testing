import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
	render() {
		const { location, current } = this.props;

		return (
			<div>
				<Link to="todolist" className="btn">TODO List</Link>
				<Link to="snippets/test" className="btn">Snippets</Link>
				<Link to="movements" className="btn">Movements</Link>
			</div>
		)
	}
};

export default Nav;