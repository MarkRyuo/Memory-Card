

import React from 'react'

function GameHeader({score, moves}) {
  return (
    <div>
      <h1 className='text-2xl p-[5px]'>🎮 Memory Card Game</h1>

      <div className='flex justify-between p-[10px]'>
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
