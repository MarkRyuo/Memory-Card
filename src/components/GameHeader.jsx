

import React from 'react'

function GameHeader({score, moves}) {
  return (
    <div className='border w-125'>
      <h1 className='text-2xl p-1.25 text-center'>🎮 Memory Card Game</h1>

      <div className='flex justify-evenly p-2.5'>
        <div>
        <span>Score:</span>
        <span>{score}</span>
        </div>

        <div>
          <span>Moves:</span>
          <span>{moves}</span>
        </div>
      </div>

    </div>
  )
}

export default GameHeader
