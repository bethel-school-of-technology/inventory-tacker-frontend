import '../App.css';
import React, { Component } from 'react';
import axios from 'axios';

class Inventory extends Component {
	state = {
		results: []
	};

	fetchResults = () => {
		var encodedURI = 'http://localhost:3001/inventory/';
		return axios.get(encodedURI).then((response) => {
			this.setState(() => {
				return {
					results: response.data
				};
			});
		});
	};

	componentDidMount() {
		this.fetchResults();
	}
	render() {
		console.log(this.state.results);
		if (this.state.results.length === 0) {
			return <div>Failed to fetch data from server</div>;
		}
		const mowers = this.state.results.map((mower) => (
			<ul className="list" key={mower.MowerId}>
				<li>
					<p className="postbadgeA">{mower.MowerId}</p>
					<p className="postbadge">
						<strong>Mower: </strong>
						{mower.MowerName}
					</p>
					<strong>Type: </strong>
					{mower.MowerType}
				</li>
				<li>
					<p className="postbadgeC">
						<strong>In Stock: </strong>
					</p>
					<p className="postbadgeB">{mower.Inventory}</p>
					<button className="butupdate" type="submit" value="submit">
						Update
					</button>{' '}
					: Stock quantity
				</li>
				<li>
					<form
						name="delete"
						className="red"
						method="POST"
						action="http://localhost:3001/inventory/{{MowerId}}/delete"
					>
						<button className="postdel" type="submit" value="submit">
							Delete
						</button>{' '}
						: Delete Mower from Inventory.
					</form>
				</li>
			</ul>
		));

		return <div>{mowers}</div>;
	}
}

export default Inventory;
