// import React, { Component } from "react";
// import axios from "axios";
// import "../App.css";

// const apiUrl = "http://localhost3001/inventory";
// class Inventory extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       results: []
//     };
//   }

// fetchResults = () => {
//   var encodedURI = "http://localhost:3001/inventory/";
//   return axios.get(encodedURI).then(response => {
//     this.setState(() => {
//       return {
//         results: response.data
//       };
//     });
//   });
// };

//   // componentDidMount() {
//   //   this.fetchResults();
//   // }

//   render() {
//     console.log(this.state.results);
//     if (this.state.results.length === 0) {
//       return <div>Failed to fetch data from server</div>;
//     }
//     const mowers = this.state.results.map(mower => (
//       <ul className="list" key={mower.MowerId}>
//         <li>
//           <p className="postbadgeA">{mower.MowerId}</p>
//           <p className="postbadge">
//             <strong>Mower: </strong>
//             {mower.MowerName}
//           </p>
//           <strong>Type: </strong>
//           {mower.MowerType}
//         </li>
//         <li>
//           <p className="postbadgeC">
//             <strong>In Stock: </strong>
//           </p>
//           <p className="postbadgeB">{mower.Inventory}</p>
//           <button className="butupdate" type="submit" value="submit">
//             Update
//           </button>{" "}
//           : Stock quantity
//         </li>
//         <li>
//           <form
//             name="delete"
//             className="red"
//             method="POST"
//             action="http://localhost:3001/inventory/{{MowerId}}/delete"
//           >
//             <button className="postdel" type="submit" value="submit">
//               Delete
//             </button>{" "}
//             : Delete Mower from Inventory.
//           </form>
//         </li>
//       </ul>

//     )
//     );

//     return <div>{mowers}</div>;
//   }
// }

// export default Inventory;

import React, { Component } from "react";
import axios from "axios";
import "../App.css";
// import Cookie from "js-cookie";

const apiUrl = "http://localhost:3001/inventory";

class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MowerName: "",
      MowerType: "",
      Inventory: ""
    };
    // this.handleMowerChange = this.handleMowerChange.bind(this);
    // this.handleTypeChange = this.handleTypeChange.bind(this);
    // this.handleInventoryChange = this.handleInventoryChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleMowerChange = event => {
  //   this.setState({
  //     MowerName: event.target.value
  //   });
  // };

  // handleTypeChange = event => {
  //   this.setState({
  //     MowerType: event.target.value
  //   });
  // };

  // handleInventoryChange = event => {
  //   this.setState({
  //     Inventory: event.target.value
  //   });
  // };

  // handleSubmit = async event => {
  //   event.preventDefault();
  //   //Cookie.get('token');
  //   //headers: {
  //   //	Authorization: `JWT ${localStorage.getItem('JWT')}`
  //   //};
  //   try {
  //     await (this.state.MowerName, this.state.MowerType, this.state.Inventory);
  //     alert("New Mower added to Inventory.");
  //     this.props.history.push("/inventory");
  //   } catch (event) {
  //     alert(event.message);
  //   }
  //   const { MowerName, MowerType, Inventory } = this.state;
  //   console.log(MowerName);
  //   return axios.post(apiUrl, {
  //     MowerName,
  //     MowerType,
  //     Inventory
  //   });
  // };
  // handleChange(key, event) {
  //   this.setState({
  //     [key]: event.target.value
  //   });
  // }
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
          <li key={i} className="list-group-item">
            {post.MowerId} {post.MowerName} {post.MowerType} {post.Inventory}
          </li>
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
        <div>
          <h2>Inventory List:</h2>
          <p>
            <div>
              <ul className="list-group list-group-flush">
                {this.state.Posts}
              </ul>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Inventory;
