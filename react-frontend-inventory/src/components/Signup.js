import React, { Component } from 'react';
import '../App.css';

class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			EmployeeNumber: '',
			FirstName: '',
			LastName: '',
			Email: '',
			UserName: '',
			Password: ''
		};
		this.handleNumberChange = this.handleNumberChange.bind(this);
		this.handleFirstChange = this.handleFirstChange.bind(this);
		this.handleLastChange = this.handleLastChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNumberChange = (event) => {
		this.setState({
			EmployeeNumber: event.target.value
		});
	};

	handleFirstChange = (event) => {
		this.setState({
			FirstName: event.target.value
		});
	};

	handleLastChange = (event) => {
		this.setState({
			LastName: event.target.value
		});
	};

	handleEmailChange = (event) => {
		this.setState({
			Email: event.target.value
		});
	};

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
		alert(
			`${this.state.EmployeeNumber} ${this.state.FirstName} ${this.state.LastName} ${this.state.Email} ${this
				.state.Username} ${this.state.Password}`
		);
		event.preventDefault();
	};

	render() {
		return (
			<form id="signup" name="signup" method="POST" onSubmit={this.handleSubmit}>
				<h1>All Money Mower Staff - Please sign up</h1>
				<img src={require('../images/man3.png')} class="right" width="140px" alt="man" />
				<div>
					<label>Employee Number:</label>
					<input
						type="text"
						name="employeeNumber"
						value={this.state.EmployeeNumber}
						onChange={this.handleNumberChange}
						required
					/>
				</div>
				<div>
					<label>First Name:</label>
					<input
						type="text"
						name="name"
						value={this.state.FirstName}
						onChange={this.handleFirstChange}
						required
					/>
				</div>
				<div>
					<label>Last Name:</label>
					<input
						type="text"
						name="name"
						value={this.state.LastName}
						onChange={this.handleLastChange}
						required
					/>
				</div>
				<div>
					<label>Email:</label>
					<input
						type="email"
						name="email"
						placeholder="me@example.com"
						value={this.state.Email}
						onChange={this.handleEmailChange}
						required
					/>
				</div>
				<div>
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

export default Signup;
