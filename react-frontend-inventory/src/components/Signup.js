import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      company: "",
      location: ""
    };
  }

  handleNameChange = event => {
    this.ListeningStateChangedEvent({
      name: event.target.value
    });
  };

  handleCompanyChange = event => {
    this.ListeningStateChangedEvent({
      company: event.target.value
    });
  };

  handleLocationChange = event => {
    this.ListeningStateChangedEvent({
      location: event.target.value
    });
  };

  handleSubmit = event => {
    alert(`${this.state.name} ${this.state.company} ${this.state.location}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label>Company</label>
          <input
            type="text"
            value={this.state.company}
            onChange={this.handleCompanyChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
        </div>
      </form>
    );
  }
}

export default Signup;
