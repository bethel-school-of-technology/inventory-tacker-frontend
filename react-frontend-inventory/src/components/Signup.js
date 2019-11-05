<<<<<<< Updated upstream
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
=======
import React, { Component } from "react";
import "../App.css";
>>>>>>> Stashed changes

class Signup extends Component {
  constructor(props) {
    super(props);

<<<<<<< Updated upstream
		this.state = {
			EmployeeNumber: '',
			FirstName: '',
			LastName: '',
			Email: '',
			Username: '',
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
=======
    this.state = {
      EmployeeNumber: "",
      FirstName: "",
      LastName: "",
      Email: "",
      UserName: "",
      Password: ""
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
>>>>>>> Stashed changes

  handleNumberChange = event => {
    this.setState({
      EmployeeNumber: event.target.value
    });
  };

  handleFirstChange = event => {
    this.setState({
      FirstName: event.target.value
    });
  };

  handleLastChange = event => {
    this.setState({
      LastName: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      Email: event.target.value
    });
  };

  handleUserChange = event => {
    this.setState({
      Username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      Password: event.target.value
    });
  };

<<<<<<< Updated upstream
	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await (this.state.EmployeeNumber,
			this.state.FirstName,
			this.state.LastName,
			this.state.Email,
			this.state.Username,
			this.state.Password);
			alert('login successfull!');
			this.props.history.push('/signup');
		} catch (event) {
			alert(event.message);
		}
		const { EmployeeNumber, FirstName, LastName, Email, Username, Password } = this.state;
		const apiUrl = 'http://localhost:3001/users/signup';
		return axios.post(apiUrl, {
			EmployeeNumber,
			FirstName,
			LastName,
			Email,
			Username,
			Password
		});
	};
	handleChange(key, event) {
		this.setState({
			[key]: event.target.value
		});
	}

	render() {
		return (
			<div className="grid">
				<h2>All Money Mower Staff - Please sign up</h2>
				<div className="col-1-3">
					<React.Fragment>
						<form id="signup" name="signup" method="POST" onSubmit={this.handleSubmit}>
							<div>
								<label>Employee #:</label>
								<input
									type="text"
									name="EmployeeNumber"
									value={this.state.EmployeeNumber}
									onChange={this.handleNumberChange}
									required
								/>
							</div>
							<div>
								<label>First Name:</label>
								<input
									type="text"
									name="FirstName"
									value={this.state.FirstName}
									onChange={this.handleFirstChange}
									required
								/>
							</div>
							<div>
								<label>Last Name:</label>
								<input
									type="text"
									name="LastName"
									value={this.state.LastName}
									onChange={this.handleLastChange}
									required
								/>
							</div>
							<div>
								<label>Email:</label>
								<input
									type="email"
									name="Email"
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
									name="Username"
									value={this.state.Username}
									onChange={this.handleUserChange}
									required
								/>
							</div>
							<div>
								<label>Password:</label>
								<input
									type="password"
									name="Password"
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
					</React.Fragment>
				</div>
				<div className="col-2-3">
					<img src={require('../images/man3.png')} width="auto" alt="man" />
				</div>
				<hr />
			</div>
		);
	}
=======
  handleSubmit = event => {
    alert(
      `${this.state.EmployeeNumber} ${this.state.FirstName} ${this.state.LastName} ${this.state.Email} ${this.state.Username} ${this.state.Password}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <div class="grid">
        <h2>All Money Mower Staff - Please sign up</h2>
        <div class="col-1-3">
          <form
            id="signup"
            name="signup"
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <div>
              <label>Employee #:</label>
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
        </div>
        <div class="col-2-3">
          <img src={require("../images/man3.png")} width="auto" alt="man" />
        </div>
        <hr />
      </div>
    );
  }
>>>>>>> Stashed changes
}

export default Signup;
