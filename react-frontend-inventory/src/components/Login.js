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
		return axios
			.post(apiUrl, {
				Username,
				Password
			})
			.then((res) => {
				console.log(res);
				const data = res.data;
				axios.defaults.headers.common['Authorization'] = data;
				sessionStorage.setItem('login', data);
				if (data) {
					this.props.history.push('/NewStock');
				}
			});
		// 	sessionStorage.setItem('jwt', token);
		// 	if (token) {
		// 		this.props.history.push('/profile');
		// 	}
		// });
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

export default Login;
