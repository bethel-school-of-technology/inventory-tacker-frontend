import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Username: '',
			Password: ''
		};
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeUsername(event) {
		this.setState({
			Username: event.target.value
		});
	}

	onChangePassword(event) {
		this.setState({
			Password: event.target.value
		});
	}
	onSubmit = async (event) => {
		event.preventDefault();
		try {
			await (this.state.Username, this.state.Password);
			alert('login successfull!');
			this.props.history.push('/login');
		} catch (event) {
			alert(event.message);
		}
		const { Username, Password } = this.state;
		const apiUrl = 'http://localhost:3001/users/login';
		return axios.post(apiUrl, {
			Username,
			Password
		});
	};
	onChange(key, event) {
		this.setState({
			[key]: event.target.value
		});
	}
	render() {
		const { Username, Password } = this.state;
		return (
			<React.Fragment>
				<form id="login" name="login" method="POST" onSubmit={this.onSubmit}>
					<div>
						<h2>Please Login</h2>
						<label>Username:</label>
						<input type="text" name="username" value={Username} onChange={this.onChangeUsername} required />
					</div>
					<div>
						<label>Password:</label>
						<input
							type="password"
							name="password"
							value={Password}
							onChange={this.onChangePassword}
							required
						/>
					</div>
					<br />
					<div>
						<button type="submit" value="Submit">
							Submit
						</button>
						<br />
						<hr />
					</div>
				</form>
			</React.Fragment>
		);
	}
}
/* 
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
				<hr />
			</form>
		);
	}
}

*/
export default Login;
