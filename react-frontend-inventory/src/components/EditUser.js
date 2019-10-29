import React, { Component } from 'react';
import '../App.css';

class editUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			UserId: '',
			FirstName: '',
			LastName: '',
			Email: '',
			Username: '',
			EmployeeNumber: '',
			Admin: ''
		};
	}
	handleSubmit = (event) => {
		alert('deleted');
		event.preventDefault();
	};
	render() {
		return (
			<form name="editUser" method="POST" onSubmit={this.handleSubmit}>
				<button class="postdel" type="submit" value="delete">
					Delete Employee
				</button>
			</form>
		);
	}
}
export default editUser;
