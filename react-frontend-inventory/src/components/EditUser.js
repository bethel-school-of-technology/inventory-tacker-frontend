import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/users/admin/editUser/:id';
class editUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			UserId: '',
			FirstName: '',
			LastName: '',
			Username: '',
			EmployeeNumber: '',
			Email: '',
			Admin: ''
		};
	}

	componentDidMount() {
		this.renderPosts();
	}

	renderPosts = async () => {
		try {
			let res = await axios.get(apiUrl, {});
			let user = res.data;
			// this will re render the view with new data
			this.setState({
				User: user.map((user, i) => (
					<ul key={i} className="list-group-item">
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
					</ul>
				))
			});
		} catch (err) {
			console.log(err);
		}
	};
	render() {
		return (
			<div className="grid">
				<div className="col-1-3">
					<div>
						<img src={require('../images/avatar.png')} height="45px" alt="Avatar" />
						<h2>Employee Information:</h2>
					</div>

					<div className="col-2-3">
						<ul className="list-group list-group-flush">{this.state.Posts}</ul>
					</div>
				</div>
				<div>
					<form name="delete" className="red" method="POST" action="/users/admin/editUser/{{UserId}}/delete">
						<button class="postdel" type="submit">
							Delete Employee
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default editUser;
