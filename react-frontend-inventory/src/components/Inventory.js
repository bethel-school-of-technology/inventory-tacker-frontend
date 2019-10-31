import React, { Component } from 'react';
import '../App.css';
/*const Inventory = () => (
	<div>
		<h1>Inventory:</h1>
	</div>
);

// import axios from "axios";

/*class Inventory extends Component {
	constructor() {
		super();
		this.state = { Inventory: [] };
	}
	componentDidMount() {
		fetch("http://localhost:3001/inventory")
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((users) => {
				console.log(users);
				this.setState({ users });
			});
	}
	render() {
		return (
			<div className="App">
				<h1>Inventory</h1>
				{this.state.users.map((user) => (
					<div key={MowerId}>
						: {user.name} Password: {user.password}
					</div>
				))}
			</div>
		);
	}
}
*/
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

	handleSubmit = (event) => {
		alert(` ${this.state.MowerName} ${this.state.MowerType} ${this.state.Inventory}`);
		event.preventDefault();
	};

	render() {
		return (
			<div class="grid">
				<div class="col-2-3">
					<form id="posts" name="inventory" method="POST" onSubmit={this.handleSubmit}>
						<div>
							<h2>New Stock Item</h2>
							<label>Mower Name:</label>
							<input
								type="text"
								name="MowerName"
								value={this.state.MowerName}
								onChange={this.handleMowerChange}
								required
							/>
						</div>
						<div>
							<label>Mower Type:</label>
							<input
								type="text"
								name="MowerType"
								value={this.state.MowerType}
								onChange={this.handleTypeChange}
								required
							/>
						</div>
						<div>
							<label>Inventory:</label>
							<input
								type="number"
								name="Inventory"
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
				</div>
				<div class="col-1-3">
					<img src={require('../images/mower2.png')} width="auto" alt="Mower" />
				</div>
				<br />
				<br />
				<br />
				<br />
				<hr />
				<div>
					<h1>Inventory List:</h1>
				</div>
			</div>
		);
	}
}

export default Inventory;
