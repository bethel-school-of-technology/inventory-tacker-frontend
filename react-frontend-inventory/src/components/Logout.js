import React from 'react';
import '../App.css';
import Login from './Login.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Logout = () => (
	<Router>
		<div>
			<h1>You Are Logged Out - Please Login</h1>
			<nav>
				<Link to="/Login">Login</Link>
			</nav>
			<Route path="/Login" component={Login} />
		</div>
	</Router>
);

export default Logout;
