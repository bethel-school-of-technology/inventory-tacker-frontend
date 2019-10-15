import React from 'react';

import axios from 'axios';

class Mowers extends React.Component {
  state = {
    mowerData: []
  };

  fetchMowerData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then(response => {
      this.setState(() => {
        return {
          mowerData: response.data
        };
      });
    });
  };

  componentDidMount() {
    this.fetchMowerData();
  }

  render() {
    console.log(this.state.mowerData);
    if (this.state.mowerData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const mowers = this.state.mowerData.map(mower => (
      <div key={mower.name}>
        <em>{mower.name}</em>: {mower.type}
      </div>
    ));
    return <div>{mowers}</div>;
  }
}

export default Mowers;