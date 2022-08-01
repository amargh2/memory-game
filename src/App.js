import './App.css';
import React, { useState } from 'react'
import ScoreBoard from './components/ScoreBoard'
import InteractiveGrid from './components/InteractiveGrid';
import Header from './components/header';

function App() {
  //attaching state tracking to images (data survives page rerenders at this level)

  
  const [score, updateScore] = useState(0)
  const [clickTracker, updateClickTracker] = useState({
    '0': null,
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    '7': null,
    '8': null,
    '9': null,
    '10': null,
    '11': null,
  })

  const cleanObject = {
    '0': null,
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    '7': null,
    '8': null,
    '9': null,
    '10': null,
    '11': null,}

  function checkIfClicked(id) {
    let newState = {}
    Object.assign(newState, clickTracker)
    console.log(newState)
    console.log(newState['4'])
    if (newState[id] === null) {
      console.log(`changing ${id} to true (ie clicked)`)
      newState[id] = true
      updateClickTracker(newState)
      updateScore(score + 1)
      return
    } if (newState[id] === true){
    updateClickTracker(cleanObject)
    updateScore(0)
    return
    }
  }

  function incrementScore() {
    const newScore = score + 1;
    updateScore(newScore)
  }

  return (
    <div>
      <Header/>
      <div className ='flex justify-center px-48'>
        <p className = 'px-24 text-lg font-semibold'>
          Your mission, should you choose to accept it: click all the pictures only once!
          Every time you click a new picture you haven't already picked, you get a point.
          Click one you already clicked and the game starts over! Good luck!
        </p>
      </div>
      <div className ='flex justify-center text-xl font-bold'>
        <ScoreBoard score = {score}/>
      </div>
      <InteractiveGrid checkIfClicked={checkIfClicked} /> 
    </div>
    );
}

export default App;
