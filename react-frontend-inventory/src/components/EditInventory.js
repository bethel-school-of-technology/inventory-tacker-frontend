import React, { Component } from 'react';
import '../App.css';

class editInventory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Inventory: ''
		};
		this.handleInventoryChange = this.handleInventoryChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInventoryChange = (event) => {
		this.setState({
			Inventory: event.target.value
		});
	};

	handleSubmit = (event) => {
		alert(` ${this.state.Inventory}`);
		event.preventDefault();
	};

	render() {
		return (
			<form id="inventory" name="inventory" method="POST" onSubmit={this.handleSubmit}>
				<div>
					<h1>Update Inventory</h1>
					<label>Current Inventory:</label>
					<input
						type="number"
						name="inventory"
						value={this.state.Inventory}
						onChange={this.handleInventoryChange}
						required
					/>
				</div>
				<br />
				<div>
					<button type="submit" value="Submit">
						Submit
					</button>
				</div>
				<hr />
			</form>
		);
	}
}

export default editInventory;
