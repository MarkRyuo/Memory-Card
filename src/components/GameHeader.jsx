

import React from 'react'

function GameHeader({score, moves}) {
  return (
    <div>
      <h1>🎮 Memory Card Game</h1>
      <div>
       <span>Score:</span>
       <span>{score}</span>
      </div>

      <div>
        <span>Moves:</span>
        <span>{moves}</span>
      </div>
    </div>
  )
}

export default GameHeader
