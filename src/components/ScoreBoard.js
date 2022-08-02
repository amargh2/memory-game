import React, { useState } from 'react'

function ScoreBoard(props) {
  console.log(props.clickTracker)
  let scoreBoard = (
    <div>
      <div className='border-4 border-indigo-400 px-8 py-4 rounded-lg'>
        <p className='text-xl font-bold'>Score: {props.score}</p>
        <div className='flex justify-center'>
        <button 
          className= 'bg-indigo-400 text-white text-lg rounded-lg shadow-sm px-2'
          onClick={() => {
          props.updateScore(0)
          props.updateClickTracker(props.cleanObject)
        }}>
          Reset</button>
      </div>

      </div>
    </div>
  )
  if (props.score === 12) {
    scoreBoard = (
      <div className='border-4 border-indigo-400 px-8 py-4 rounded-lg'>
        <p className='text-xl font-bold'>Great Job!</p>
        <div className='flex justify-center'>
        <button 
          className= 'bg-indigo-400 text-white text-lg rounded-lg shadow-sm px-2'
          onClick={() => {
          props.updateScore(0)
          props.updateClickTracker(props.cleanObject)
        }}>
          Play Again</button>
      </div>
    </div>
    )
  }
  return (<div className=''>{scoreBoard}</div>)
}

export default ScoreBoard