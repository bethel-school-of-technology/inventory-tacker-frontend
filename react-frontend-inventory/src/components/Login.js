import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			UserName: '',
			Password: ''
		};
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUserChange = (event) => {
		this.setState({
			Username: event.target.value
		});
	};

	handlePasswordChange = (event) => {
		this.setState({
			Password: event.target.value
		});
	};

	handleSubmit = (event) => {
		alert(` ${this.state.Username} ${this.state.Password}`);
		event.preventDefault();
	};

	render() {
		return (
			<form id="login" name="login" method="POST" onSubmit={this.handleSubmit}>
				<div>
					<h1>Please Login</h1>
					<label>Username:</label>
					<input
						type="text"
						name="username"
						value={this.state.Username}
						onChange={this.handleUserChange}
						required
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						name="password"
						value={this.state.Password}
						onChange={this.handlePasswordChange}
						required
					/>
				</div>
				<br />
				<div>
					<button type="submit" value="Submit">
						Submit
					</button>
				</div>
			</form>
		);
	}
}
export default Login;
