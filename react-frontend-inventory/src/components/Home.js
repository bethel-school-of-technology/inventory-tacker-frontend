// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Inventory from "./Inventory";

// const Home = () => (
//   <main>
//     <Switch>
//       <Route path="/inventory" component={Inventory} />
//     </Switch>
//   </main>
// );

// // class App extends React.Component {
// //   render() {
// //     return (
// //       <div className="App">
// //         <header className="App-header">
// //           <h1>Money Mowers</h1>
// //           <h2>What Are We About?</h2>
// //           <img src={logo} className="App-logo" alt="logo" />
// //         </header>
// //         <body>
// //           <p>
// //             Money Mowers: Our missions is for you to organize your inventory
// //             easy and efficiently so you can focus on other aspects of your
// //             business.
// //           </p>
// //           <Mowers uri="http://localhost:3001/staticMowers" />
// //         </body>
// //       </div>
// //     );
// //   }
// // }

// export default Home;
import React from 'react';
import '../App.css';

const Home = () => (
	<div>
		<h1>Money Mower Staff and Inventory Tracker</h1>
		<img src={require('../images/moneymower.jpg')} width="650px" alt="Money Mower" />
	</div>
);

export default Home;
