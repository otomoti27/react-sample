// import { ColoredMessage } from "./components/ColoredMessage"
// import { CountUpButton } from "./components/CountUpButton"
import { memo, useCallback, useState } from 'react'
import { Child1 } from './components/Child1'
import { Child4 } from './components/Child4'

export const App = memo(() => {
  console.log('Appレンダリング')

  const [num, setNum] = useState(0)

  const onClickButton = () => {
    setNum((prev) => prev + 1)
  }

  const onClickReset = useCallback(() => {
    setNum(0)
  }, [])

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  )
})
