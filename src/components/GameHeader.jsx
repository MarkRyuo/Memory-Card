

import React from 'react'

function GameHeader({score, moves}) {
  return (
    <div>
      <h1 className='text-2xl p-1.25'>🎮 Memory Card Game</h1>

      <div className='flex justify-between p-2.5'>
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
