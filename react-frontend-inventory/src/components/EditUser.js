import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
class editUser extends Component {
	state = {
		userFound: []
	};

	fetchUserFound = () => {
		var encodedURI = 'http://localhost:3001/users/admin/editUser/:id';
		return axios.get(encodedURI).then((response) => {
			this.setState(() => {
				return {
					userFound: response.data
				};
			});
		});
	};

	componentDidMount() {
		this.fetchUserFound();
	}
	handleSubmit = (event) => {
		alert('deleted');
		event.preventDefault();
	};
	render() {
		console.log(this.state.userFound);
		if (this.state.userFound.length === 0) {
			return <div>Failed to fetch data from server</div>;
		}
		const users = this.state.userFound.map((user) => (
			<ul className="list" key={user.UserId}>
				<li>
					<p> Id: {user.UserId}</p>
					<p>
						Name: {user.FirstName} {user.LastName}
					</p>
					<p>Username: {user.UserName}</p>
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
