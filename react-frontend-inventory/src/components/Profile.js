//import React, {Component} from 'react';
import React from 'react';
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

const Profile = () => (
	<div>
		<img src={require('../images/avatar.png')} height="45px" alt="Avatar" />
		<p>Your Employee Information:</p>
		<hr />
	</div>
);

export default Profile;
