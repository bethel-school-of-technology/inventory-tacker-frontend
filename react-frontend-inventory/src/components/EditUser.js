import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
class editUser extends Component {
	state = {
		usersFound: []
	};

	fetchUsersFound = () => {
		var encodedURI = 'http://localhost:3001/users/admin/editUser/:id';
		return axios.get(encodedURI).then((response) => {
			this.setState(() => {
				return {
					usersFound: response.data
				};
			});
		});
	};

	componentDidMount() {
		this.fetchUsersFound();
	}
	handleSubmit = (event) => {
		alert('deleted');
		event.preventDefault();
	};
	render() {
		console.log(this.state.usersFound);
		if (this.state.usersFound.length === 0) {
			return <div>Failed to fetch data from server</div>;
		}

		const users = this.state.usersFound.map((user) => (
			<ul className="list" key={user.UserId}>
				<li>
					<p> Id: {user.UserId}</p>
					<p>
						Name: {user.FirstName} {user.LastName}
					</p>
					<p>Username: {user.Userame}</p>
					<p>Email: {user.Email}</p>
					<p>Employee #: {user.EmployeeNumber}</p>
					<p>Admin: {user.Admin}</p>
				</li>
				<form name="delete" class="red" method="POST" action="/users/admin/editUser/{{UserId}}/delete">
					<button class="postdel" type="submit">
						Delete Employee
					</button>
				</form>
			</ul>
		));

		return <div>{users}</div>;
	}
}
export default editUser;
