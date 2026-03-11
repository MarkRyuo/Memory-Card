import './App.css'
import GameHeader from './components/GameHeader'

const fruits = [
  "🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩",
  "🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩"
];



function App() {

  return (
    <>
      <main className='flex justify-center items-center flex-col'>
        <GameHeader score={1} moves={10}/>

        <div className='w-[500px] h-auto grid grid-cols-3 grid-rows-3 gap-0.5'>
            {fruits.map((fruit) => {
              return (
                <div className=''>
                  <div className=' h-20 flex justify-center items-center border-[1px] text-4xl'>{fruit}</div>
                </div>
              )
            })}
        </div>
      </main>
    </>
  )
}

export default App
