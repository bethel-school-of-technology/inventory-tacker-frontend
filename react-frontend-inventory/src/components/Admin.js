import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Admin extends Component {
	state = { usersFound: [] };

	fetchUsersFound = () => {
		var encodedURI = 'users/admin';
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
			<ul className="listb" key={user.UserId}>
				<li>
					<p className="postbadgeA">{user.UserId}</p>
					<p className="postbadge">
						{user.FirstName} {user.LastName}
					</p>
					<Link to="/EditUser">
						<button type="submit">View</button>
					</Link>
				</li>
			</ul>
		));
		return <div>{users}</div>;
	}
}

export default Admin;
