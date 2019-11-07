import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			isLoading: true,
			errors: null
		};
	}

	componentDidMount() {
		var token = localStorage.getItem('jwt');
		axios.get('http://localhost:3001/users/profile');
		return axios
			.post(token)
			.then((response) =>
				response.data.results.map((user) => ({
					FirstName: `${user.FirstName}`,
					LastName: `${user.LastName}`,
					Username: `${user.Username}`,
					Email: `${user.Email}`,
					UserId: `${user.UserId}`
				}))
			)
			.then((users) => {
				this.setState({
					users,
					isLoading: false
				});
			})
			.catch((error) => this.setState({ error, isLoading: false }));
	}

	render() {
		const { isLoading, users } = this.state;
		return (
			<React.Fragment>
				<div>
					{!isLoading ? (
						users.map((user) => {
							const { Username, LastName, Email, FirstName, UserId } = user;
							return (
								<div key={UserId}>
									<p>
										{FirstName} {LastName}
									</p>
									<div>
										<p>{Email}</p>
									</div>
									<p>{Username}</p>
									<hr />
								</div>
							);
						})
					) : (
						<p>Loading...</p>
					)}
				</div>
				<div>
					<img src={require('../images/avatar.png')} height="45px" alt="Avatar" />
					<p>Your Employee Information:</p>
					<div />
				</div>
			</React.Fragment>
		);
	}
}

/*class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			users:[]
		};
	}

	async componentDidMount() {
		const apiUrl = await fetch(`http://localhost:3001/users/profile${this.props.users}`);
		return axios.get(apiUrl)
		const users = await res.json();
        this.setState({
            users,
            loading: !this.state.loading
        });
	}
	render() {
		const { isLoading, users } = this.state;
		return (
			<React.Fragment>
				<div>
					{!isLoading ? (
						users.map((user) => {
							const { Username, LastName, Email, FirstName, UserId } = user;
							return (
								<div key={UserId}>
									<p>
										{FirstName} {LastName}
									</p>
									<div>
										<p>{Email}</p>
									</div>
									<p>{Username}</p>
									<hr />
								</div>
							);
						})
					) : (
						<p>Loading...</p>
					)}
				</div>
				<div>
					<img src={require('../images/avatar.png')} height="45px" alt="Avatar" />
					<p>Your Employee Information:</p>
					<div />
				</div>
			</React.Fragment>
		);
	}
}*/
export default Profile;
