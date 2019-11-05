import React, { Component } from 'react';
import axios from 'axios';
//import React from 'react';
import '../App.css';

/*class Profile extends Component {
	constructor(props) {
		super(props);
		 this.state = {
			 profile: true,
			result: [],
		};
    }
componentDidMount() {
  fetch("http://localhost:3001/users/profile")
  .then(response => response.json())
  .then( responseJson=> {
    this.setState({ results:responseJson.data });
  },
  )}
render(){
    return(
<div>
<h1>Your Employee Information:</h1>
<ul>
<li>
	{result.FirstName}{result.LastName}
</li>
<li>
	{result.Email}
</li>
<li>
	{result.Username}
</li>
<hr />
<li>
	{result.EmployeeNumber}
</li>
</ul>
</div>
)
};
*/

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
		axios
			.get('http://localhost:3001/users/profile')
			//.then(() => {
			//	localStorage.getItem('jwt');
			//})
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
export default Profile;
