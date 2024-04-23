import './App.css'
import DarkModeToggle from './component/DarkModeToggle'
import ReStartButton from './component/reStartButton'
import Result from './component/result'
import UserTyping from './hook/userTyping'
import useEngine from './hook/useEngines'
import { calculateCorrectAccuracy } from './utils/helper'

const GenerateWords = ({ words }: { words: string }) => {
  return <div className='dark:text-gray-500 text-black text-4xl' >{words}</div>
}

const CounterTime = ({ timeLeft }: { timeLeft: number }) => {
  return <div className='dark:text-primary-500 text-green-500 font-medium mb-3 '>TimeLeft:{timeLeft}</div>
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
  const { state, words, timeLeft, typed, errors, totalTyped, restart } = useEngine()
  return (
    <>
      <DarkModeToggle />
      <CounterTime timeLeft={timeLeft} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTyping userInput={typed} className='absolute inset-0' words={words} />
      </WordsContainer >
      <ReStartButton
        className={'text-slate-500 mx-auto mt-10'}
        onReStart={restart} />
      <Result
        error={errors}
        accuracy={calculateCorrectAccuracy(totalTyped, errors)}
        typedNumber={totalTyped}
        className={''}
        state={state}
      />
    </>
  )
}



export default App
