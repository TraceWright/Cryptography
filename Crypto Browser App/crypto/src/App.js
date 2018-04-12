import React, { Component } from 'react';
import './App.css';

class App extends Component {

// Linear feedback shift register

runlfts() {
  let startState = [0,0,0,0,1,0];
  let vectors = [];
  vectors.push(startState);
  let previousVector = []
  let currentVector = [];
  let i = 0;

  previousVector = startState;

  for (let i = 1; i < 200; i++) {

    (previousVector[0] + previousVector[5]) === 1 ? currentVector[0] = 1 : currentVector[0] = 0;

for (let j = 1; j < 6; j++) {
  currentVector[j] = previousVector[j-1];
}

console.log("iteration " + i + "  " + currentVector);

    previousVector = currentVector;
    if (
      // currentVector === startState

      currentVector[0] === startState[0] &&
      currentVector[1] === startState[1] && 
      currentVector[2] === startState[2] && 
      currentVector[3] === startState[3] && 
      currentVector[4] === startState[4] && 
      currentVector[5] === startState[5]
      ) {

      console.log("Period: " + i);
      // i = 200;
      }
    
    currentVector = [];

  }

}

  render() {
    return (
      <div className="App">
       <button onClick={() => {this.runlfts()} }>LFTS</button>
      </div>
    );
  }
}

export default App;
