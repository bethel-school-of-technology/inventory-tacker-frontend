import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
// import Cookie from "js-cookie";

const apiUrl = 'http://localhost:3001/inventory';

class Inventory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			MowerId: '',
			MowerName: '',
			MowerType: '',
			Inventory: ''
		};
		this.handleChange = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClick = (event) => {
		this.setState({ MowerId: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		axios.delete(`http://localhost:3001/inventory/:id/delete/${this.state.MowerId}`).then((res) => {
			console.log(res.data);
			this.props.history.push('/Inventory');
		});
	};

	componentDidMount() {
		this.renderPosts();
	}

	renderPosts = async () => {
		try {
			let res = await axios.get(apiUrl, {});
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
							<Link to="/EditInventory">
								<p className="postbadgeB">{post.Inventory}</p>
								<button className="butupdate" type="submit" value="submit">
									Update
								</button>
							</Link>
							: Stock Quantity
						</li>
						<li>
							<div>
								<form className="red" onSubmit={this.handleSubmit}>
									<button className="postdel" type="submit" value="Submit" onClick={this.handleClick}>
										Delete
									</button>{' '}
									:Delete Mower from Inventory.
								</form>
							</div>
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
					<h2>Inventory List:</h2>

					<div>
						<ul className="list-group list-group-flush">{this.state.Posts}</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Inventory;
