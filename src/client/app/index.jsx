import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Layout from './pages/Layout.jsx';

import Snippets from './pages/Snippets.jsx';
import Movements from './pages/Movements.jsx';
import TodoList from './pages/TodoList.jsx';

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Route path="/movements" name="movements" component={Movements}></Route>
			<Route path="/todolist" name="todolist" component={TodoList}></Route>
			<Route path="/snippets/:name" name="snippets" component={Snippets}></Route>
		</Route>
	</Router>, 
	app
);