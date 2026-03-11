import './App.css'
import GameHeader from './components/GameHeader'

const fruits = [
  "🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩",
  "🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩"
];



function App() {

  return (
    <>
      <main className='flex justify-center items-center flex-col w-full h-screen' style={{ background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)", }}>
        <GameHeader score={1} moves={10} />

        <div className='w-125 h-auto grid grid-cols-3 grid-rows-3 gap-0.5'>
          {fruits.map((fruit) => {
            return (
              <div className=''>
                <div className=' h-20 flex justify-center items-center border text-4xl'>{fruit}</div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default App
