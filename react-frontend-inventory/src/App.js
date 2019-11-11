import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Inventory from './components/Inventory';
import Signup from './components/Signup';
import NewStock from './components/NewStock';
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
				  <Link to="/NewStock">New Item</Link>
				<Link to="/Inventory">Stock</Link>
				  <Link to="/Admin">Admin</Link>
				  <Link to="/Logout">Logout</Link>
			</nav>
			<hr />
			<Route exact path="/" component={Home} />
			<Route path="/Login" component={Login} />
			<Route path="/Inventory" component={Inventory} />
			<Route path="/Signup" component={Signup} />
			<Route path="/NewStock" component={NewStock} />
			<Route path="/EditInventory" component={EditInventory} />
			<Route path="/EditUser" component={EditUser} />
			<Route path="/Admin" component={Admin} />
			<Route path="/Logout" component={Logout} />
		</div>
	</Router>
);
export default App;
