// import React from "react";
// import axios from "axios";
// import Modal from "react-modal";

// //check out Material UI for CSS

// class Mowers extends React.Component {
//   state = {
//     mowerData: [],
//     modalIsOpen: false
//   };

//   openModal = this.openModal.bind(this);
//   closeModal =this.closeModal.bind(this);

//   openModal() {
//     this.setState({ modalIsOpen: true });
//   }

//   closeModal() {
//     this.setState({ modalIsOpen: false });
//   }

//   fetchMowerData = () => {
//     var encodedURI = window.encodeURI(this.props.uri);
//     return axios.get(encodedURI).then(response => {
//       this.setState(() => {
//         return {
//           mowerData: response.data
//         };
//       });
//     });
//   };

//   componentDidMount() {
//     this.fetchMowerData();
//   }

//   render() {
//     console.log(this.state.mowerData);
//     if (this.state.mowerData.length === 0) {
//       return <div>Failed to fetch data from server</div>;
//     }
//     const mowers = this.state.mowerData.map(mower => (
//       <div key={mower.name}>
//         <em>{mower.name}</em>
//       </div>
//     ));
//     const mowerType = this.state.mowerData.map(mower => (
//       <div key={mower.type}>
//         <em>{mower.type}</em>
//       </div>
//     ));
//     return (
//       <div>
//         <button onClick={this.openModal}>{mowers.length > 0}</button>
//         <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
//           {mowerType}
//         </Modal>
//       </div>
//     );
//   }
// }

// // export default Mowers;
