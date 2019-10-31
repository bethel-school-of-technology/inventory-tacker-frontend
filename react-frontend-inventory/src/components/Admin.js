import React from 'react';
import '../App.css';

const Admin = () => (
	<div class="grid">
		<div class="col-2-3">
			<h2>Administration Page</h2>
			<h4>List of Employees:</h4>
		</div>
		<div class="col-1-3">
			<img src={require('../images/admin.png')} width="auto" alt="admin" />
		</div>
		<hr />
	</div>
);

export default Admin;
