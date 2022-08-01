import './App.css';
import React, { useState } from 'react'
import ScoreBoard from './components/ScoreBoard'
import InteractiveGrid from './components/InteractiveGrid';
import Header from './components/header';
import Instructions from './components/instructions';

function App() {
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

  const [score, updateScore] = useState(0)
  const [clickTracker, updateClickTracker] = useState(cleanObject)



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

  return (
    <div>
      <div className="header">
        <Header/>
      </div>

      <div className="">
        <div className ='grid grid-rows-10 grid-cols-10 justify-center text-xl font-bold'>
          <div className="col-start-1 col-span-1">
            <ScoreBoard score = {score}/>
            <Instructions/>
          </div>
          <div className='row-start-1 py-6 row-span-full col-start-2 col-span-full'>
            <InteractiveGrid checkIfClicked={checkIfClicked} />
          </div>
        </div>
        
      </div> 
    </div>
    );
}

export default App;
