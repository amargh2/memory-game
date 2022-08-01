import React from "react"

function Instructions() {
  return (
    <div className=''>
      <div className ='flex py-8 justify-center rounded-lg shadow-md'>
        <p className = 'text-lg font-semibold'>
          Click all the pictures only once!
          Every time you click a new picture you haven't already picked, you get a point.
          Click one you already clicked and the game starts over! Good luck!
        </p>
      </div>
    </div>
  )
}

export default Instructions