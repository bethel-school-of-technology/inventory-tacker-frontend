import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
// import Cookie from "js-cookie";

const apiUrl = 'http://localhost:3001/inventory';

class Inventory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			MowerName: '',
			MowerType: '',
			Inventory: ''
		};
	}

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
							<p className="postbadgeB">{post.Inventory}</p>
							<button className="butupdate" type="submit" value="submit">
								Update
							</button>
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
								</button>
								: Delete Mower from Inventory.
							</form>
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
				{/* <div className="col-2-3">
          <React.Fragment>
            <form
              id="posts"
              name="inventory"
              method="POST"
              onSubmit={this.handleSubmit}
            >
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
          <img src={require("../images/mower2.png")} width="auto" alt="Mower" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr /> */}
				<div className="col-3-3">
					<h2>Inventory List:</h2>
					<p>
						<div>
							<ul className="list-group list-group-flush">{this.state.Posts}</ul>
						</div>
					</p>
				</div>
			</div>
		);
	}
}

export default Inventory;
