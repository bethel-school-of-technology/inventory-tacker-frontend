//import React from 'react';
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

// const Admin = () => (
// 	<div className="grid">
// 		<div className="col-6-10">
// 			<h2>Administration Page</h2>
// 			<h4>List of Employees:</h4>
// 		</div>
// 		<div className="col-4-10">
// 			<img src={require('../images/admin.png')} width="auto" alt="admin" />
// 		</div>
// 		<hr />
// 	</div>
// );

class Admin extends Component {
	state = { usersFound: [] };

	fetchUsersFound = () => {
		var encodedURI = 'http://localhost:3001/users/admin';
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

	render() {
		console.log(this.state.usersFound);
		if (this.state.usersFound.length === 0) {
			return <div>Failed to fetch data from server</div>;
		}
		const users = this.state.usersFound.map((user) => (
			<ul className="tasks" key={user.UserId}>
				<div className="list">
					<p className="postbadgeA">{user.UserId}</p>
					<p className="postbadge">
						{user.FirstName} {user.LastName}
					</p>
					<button onclick="http://localhost:3001/users/admin/editUser/{{UserId}}'">View</button>
				</div>
			</ul>
		));
		return <div>{users}</div>;
	}
}

export default Admin;
