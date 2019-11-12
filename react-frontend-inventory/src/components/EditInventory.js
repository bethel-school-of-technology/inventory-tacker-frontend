import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

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

	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await this.state.Inventory;
			this.props.history.push('/EditInventory');
		} catch (event) {
			alert(event.message);
		}

		const { Inventory } = this.state;
		// sessionStorage.getItem('login', data);
		const apiUrl = 'http://localhost:3001/inventory/:id/update';
		return axios
			.post(apiUrl, {
				Inventory
			})
			.then((res) => {
				console.log(res);
				this.props.history.push('/Inventory');
			});
	};
	onChange(key, event) {
		this.setState({
			[key]: event.target.value
		});
	}

	render() {
		return (
			<form id="inventory" name="inventory" method="POST" onSubmit={this.handleSubmit}>
				<div>
					<h2>Update Inventory</h2>
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
