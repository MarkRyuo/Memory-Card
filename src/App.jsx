import './App.css'
import GameHeader from './components/GameHeader'

function App() {

  return (
    <>
      <main>
        <GameHeader score={1} moves={10}/>
      </main>
    </>
  )
}

export default App
