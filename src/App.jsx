import './App.css'
import GameHeader from './components/GameHeader'

const fruits = [
  "🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩",
  "🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩"
]



function App() {

  return (
    <>
      <main>
        <GameHeader score={1} moves={10}/>

        <div>
            {fruits.map((fruit) => {
              return (
                <div>{fruit}</div>
              )
            })}
        </div>
      </main>
    </>
  )
}

export default App
