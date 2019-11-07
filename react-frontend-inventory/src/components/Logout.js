import React from 'react';
//import React, { Component } from 'react';
import '../App.css';
//import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Login from './Login.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/*class Logout extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	
	handleSubmit = async (event) => {	
	event.preventDefault();
	localStorage.setItem("JWT",null);
	window.location.href = "#/Login";
	alert('You Are Logged Out - Please Login!')
	const apiUrl = 'http://localhost:3001/users/logout';
	return axios.get(apiUrl);
	}
};
render () {
	return(
		<div>
			<button type="submit" value="Submit">Logout</button>
		</div>
		<Router>
			<div>
				<nav>
					<Link to="/Login">Login</Link>
				</nav>
				<Route path="/Login" component={Login} />
			</div>
		</Router>
	)
}
*/
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
