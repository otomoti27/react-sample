import { useEffect, useState } from 'react'

export const CountUpButton = () => {
  const [num, setNum] = useState(0)

  const countUp = () => {
    setNum((prev) => prev + 1)
  }

  useEffect(() => {
    console.log('カウンターが更新されました。')
  }, [num])

  return (
    <>
      <button onClick={countUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  )
}
