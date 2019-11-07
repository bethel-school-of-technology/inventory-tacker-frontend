import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Inventory from './components/Inventory';
import Logout from './components/Logout';
import Admin from './components/Admin';
import EditInventory from './components/EditInventory';
import EditUser from './components/EditUser';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
	<Router>
		<div>
			<nav>
				  <Link to="/">Home</Link>
				  <Link to="/Signup">Signup</Link>
				  <Link to="/Login">Login</Link>
				  <Link to="/Profile">Profile</Link>
				  <Link to="/Inventory">Inventory</Link>
				  <Link to="/Admin">Admin</Link>
				  <Link to="/Logout">Logout</Link>
			</nav>
			<hr />
			<Route exact path="/" component={Home} />
			<Route path="/Login" component={Login} />
			<Route path="/Profile" component={Profile} />
			<Route path="/Signup" component={Signup} />
			<Route path="/Inventory" component={Inventory} />
			<Route path="/EditInventory" component={EditInventory} />
			<Route path="/EditUser" component={EditUser} />
			<Route path="/Admin" component={Admin} />
			<Route path="/Logout" component={Logout} />
		</div>
	</Router>
);
export default App;
