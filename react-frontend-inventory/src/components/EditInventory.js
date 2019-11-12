// import React, { Component } from 'react';
// import '../App.css';
// import axios from 'axios';

// class editInventory extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			Inventory: ''
// 		};
// 		this.handleInventoryChange = this.handleInventoryChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleInventoryChange = (event) => {
// 		this.setState({
// 			Inventory: event.target.value
// 		});
// 	};

// 	handleSubmit = async (event) => {
// 		event.preventDefault();
// 		try {
// 			await this.state.Inventory;
// 			this.props.history.push('/EditInventory');
// 		} catch (event) {
// 			alert(event.message);
// 		}

// 		const { Inventory } = this.state;
// 		// sessionStorage.getItem('login', data);
// 		const apiUrl = 'http://localhost:3001/inventory/:id/update';
// 		return axios
// 			.post(apiUrl, {
// 				Inventory
// 			})
// 			.then((res) => {
// 				console.log(res);
// 				this.props.history.push('/Inventory');
// 			});
// 	};
// 	onChange(key, event) {
// 		this.setState({
// 			[key]: event.target.value
// 		});
// 	}

// 	render() {
// 		return (
// 			<form id="inventory" name="inventory" method="POST" onSubmit={this.handleSubmit}>
// 				<div>
// 					<h2>Update Inventory</h2>
// 					<label>Current Inventory:</label>
// 					<input
// 						type="number"
// 						name="inventory"
// 						value={this.state.Inventory}
// 						onChange={this.handleInventoryChange}
// 						required
// 					/>
// 				</div>
// 				<br />
// 				<div>
// 					<button type="submit" value="Submit">
// 						Submit
// 					</button>
// 				</div>
// 				<hr />
// 			</form>
// 		);
// 	}
// }

import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

// import Cookie from "js-cookie";

const apiUrl = 'http://localhost:3001/inventory/:id/update';
const inventoryApi = 'http://localhost:3001/inventory/:id';

class editInventory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			MowerName: '',
			MowerType: '',
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
			this.props.history.push('/Inventory');
		} catch (event) {
			alert(event.message);
		}

		const { Inventory } = this.state;
		// 		// sessionStorage.getItem('login', data);

		return axios
			.post(apiUrl, {
				Inventory
			})
			.then((res) => {
				console.log(res);
			});
	};
	onChange(key, event) {
		this.setState({
			[key]: event.target.value
		});
	}

	componentDidMount() {
		this.renderPosts();
	}

	renderPosts = async () => {
		try {
			let res = await axios.get(inventoryApi, {});
			let posts = res.data;
			// this will re render the view with new data
			this.setState({
				Posts: posts.map((post, i) => (
					<ul key={i} className="list-group-item">
						<li>
							<p className="postbadgeA">{post.MowerId}</p>
							<p className="postbadge">
								<strong>Mower: </strong>
								{post.MowerName}
							</p>
							<strong>Type: </strong>
							{post.MowerType}
						</li>
					</ul>
				))
			});
		} catch (err) {
			console.log(err);
		}
	};
	render() {
		return (
			<div className="grid">
				<div className="col-3-3">
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
					</form>
					<br />
				</div>
				<hr />
				<div className="col-3-3">
					<h2>Selected Inventory to be Updated:</h2>
					<div>
						<ul className="list-group list-group-flush">{this.state.Posts}</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default editInventory;
