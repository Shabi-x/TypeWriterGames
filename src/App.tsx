import './App.css'
import { faker } from '@faker-js/faker'
import ReStartButton from './component/reStartButton'

const words = faker.word.words(10)
const GenerateWords = ({ words }: { words: string }) => {
  return <div className='text-primary-500 text-4xl' >{words}</div>
}

const CounterTime = ({ timeLeft }: { timeLeft: number }) => {


  return <div className='text-primary-500 font-medium mb-3 '>TimeLeft:{timeLeft}</div>
}
function App() {

  return (
    <>
      <CounterTime timeLeft={10} />
      <GenerateWords words={words} />
      <ReStartButton className={'align-center'} onReStart={() => {

      }} />
    </>
  )
}



export default App
