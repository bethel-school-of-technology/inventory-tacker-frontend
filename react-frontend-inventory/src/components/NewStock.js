import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
//import Cookie from 'js-cookie';

class Inventory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			MowerName: '',
			MowerType: '',
			Inventory: ''
		};
		this.handleMowerChange = this.handleMowerChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleInventoryChange = this.handleInventoryChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleMowerChange = (event) => {
		this.setState({
			MowerName: event.target.value
		});
	};

	handleTypeChange = (event) => {
		this.setState({
			MowerType: event.target.value
		});
	};

	handleInventoryChange = (event) => {
		this.setState({
			Inventory: event.target.value
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		//Cookie.get('token');
		//headers: {
		//	Authorization: `JWT ${localStorage.getItem('JWT')}`
		//};
		try {
			await (this.state.MowerName, this.state.MowerType, this.state.Inventory);
			alert('New Mower added to Inventory.');
			this.props.history.push('/inventory');
		} catch (event) {
			alert(event.message);
		}
		const { MowerName, MowerType, Inventory } = this.state;
		const apiUrl = 'http://localhost:3001/inventory';
		return axios.post(apiUrl, {
			MowerName,
			MowerType,
			Inventory
		});
	};
	handleChange(key, event) {
		this.setState({
			[key]: event.target.value
		});
	}
	render() {
		return (
			<div className="grid">
				<div className="col-2-3">
					<React.Fragment>
						<form id="posts" name="inventory" method="POST" onSubmit={this.handleSubmit}>
							<div>
								<h2>New Stock Item</h2>
								<label>Mower Name:</label>
								<input
									type="text"
									name="title"
									value={this.state.MowerName}
									onChange={this.handleMowerChange}
									required
								/>
							</div>
							<div>
								<label>Mower Type:</label>
								<input
									type="text"
									name="body"
									value={this.state.MowerType}
									onChange={this.handleTypeChange}
									required
								/>
							</div>
							<div>
								<label>Inventory:</label>
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
						</form>
					</React.Fragment>
				</div>
				<div className="col-1-3">
					<img src={require('../images/mower2.png')} width="auto" alt="Mower" />
				</div>
				<br />
				<br />
				<br />
				<br />
				<hr />
			</div>
		);
	}
}

export default Inventory;
