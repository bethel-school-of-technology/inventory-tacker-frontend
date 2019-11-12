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

		return axios
			.put(apiUrl, {
				Inventory
			})
			.then((res) => {
				console.log(res);
			});
	};
	handleChange(key, event) {
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
						<li>
							<p className="postbadgeC">
								<strong>In Stock: </strong>
							</p>
							<p className="postbadgeB">{post.Inventory}</p>
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
					<React.Fragment>
						<form id="inventory" name="Inventory" method="POST" onSubmit={this.handleSubmit}>
							<div>
								<h2>Update Inventory</h2>
								<label>Current Inventory:</label>
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
								<button className="butupdate" type="submit" value="Submit">
									Update
								</button>
							</div>
						</form>
					</React.Fragment>
					<br />
				</div>
				<hr />
				<div className="col-3-3">
					<h2>Selected Stock Item to be Updated:</h2>
					<div>
						<ul className="list-group list-group-flush">{this.state.Posts}</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default editInventory;
