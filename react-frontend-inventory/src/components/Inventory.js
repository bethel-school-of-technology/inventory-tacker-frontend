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
				<div>
					<li>
						{mower.MowerId}
						{mower.MowerName}
						: {mower.MowerType}
					</li>
					<li>{mower.Inventory}</li>
				</div>
			</ul>
		));

		return <div>{mowers}</div>;
	}
}

export default Inventory;
