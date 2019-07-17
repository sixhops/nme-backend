import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import QueenList from './QueenList';
// import QueenDetail from './QueenDetail';
// import DroneDetail from './DroneDetail';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queens: []
    }
    // this.selectQueen = this.selectQueen.bind(this)
    // this.selectDrone = this.selectDrone.bind(this)
  }

  // selectQueen(queenId) {
  //   axios.get(`/api/queens/${queenId}`)
  //     .then(res => {
  //       this.setState({
  //         currentQueen: res.data,
  //         currentDrone: {}
  //       })
  //     })
  // }

  // selectDrone(drone) {
  //   this.setState({
  //     currentDrone: drone
  //   })
  // }

  componentDidMount() {
    axios.get("/api/queens")
      .then(res => {
        this.setState({
          queens: res.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <QueenList queens={this.state.queens} />
      </div>
    );
  }
}

export default App;
