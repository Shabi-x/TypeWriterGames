import './App.css'
import { faker } from '@faker-js/faker'
import ReStartButton from './component/reStartButton'
import Result from './component/result'
import UserTyping from './component/userTyping'

const words = faker.word.words(10)
const GenerateWords = ({ words }: { words: string }) => {
  return <div className='text-gray-500 text-4xl' >{words}</div>
}

const CounterTime = ({ timeLeft }: { timeLeft: number }) => {
  return <div className='text-primary-500 font-medium mb-3 '>TimeLeft:{timeLeft}</div>
}

/**
 * 相对定位的容器，使得UserTyping组件位于WordsContainer组件的正中间
 * @param param0 
 * @returns 
 */
const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='relative text-4xl max-w-2xl  break-all '>{children}</div >
}

function App() {

  return (
    <>
      <CounterTime timeLeft={10} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTyping userInput={'dasds   asdasd'} className='absolute inset-0' />
      </WordsContainer >
      <ReStartButton className={'text-slate-500 mx-auto mt-10'} onReStart={() => {
      }} />
      <Result
        error={10}
        accuracy={20.23}
        typedNumber={10}
        className={''}
      />
    </>
  )
}



export default App
