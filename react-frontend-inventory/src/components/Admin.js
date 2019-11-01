import React from 'react';
import '../App.css';

const Admin = () => (
	<div class="grid">
		<div class="col-6-10">
			<h2>Administration Page</h2>
			<h4>List of Employees:</h4>
		</div>
		<div class="col-4-10">
			<img src={require('../images/admin.png')} width="auto" alt="admin" />
		</div>
		<hr />
	</div>
);

/*import React, { Component } from 'react';
import '../App.css';

class Admin extends Component {
	state = { usersFound: [] };

	componentDidMount() {
		fetch('/users/admin').then((res) => res.json()).then((usersFound) => this.setState({ usersFound }));
	}

	render() {
		return (
			<h2>Users</h2>
			<div className="Admin">
				{this.state.usersFound.map((user) => (
					<div key={user.id}>
						{user.UserId}
						{user.FirstName}
						{user.LastName}
					</div>
				))}
			</div>
		);
	}
}
*/
export default Admin;
