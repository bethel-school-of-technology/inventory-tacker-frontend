import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mowers from './components/Mowers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Mowers uri="http://localhost:3001/staticMowers" />
      </div>
    );
  }
}

export default App;
