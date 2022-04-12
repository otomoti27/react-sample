import { ColoredMessage } from "./components/ColoredMessage"
import { CountUpButton } from "./components/CountUpButton"

export const App = () => {

  return (
    <>
      <h1>こんにちは！</h1>
      <ColoredMessage color='blue'>お元気ですか？</ColoredMessage> 
      <ColoredMessage color='pink'>元気です！</ColoredMessage>
      <CountUpButton />
    </>
  )
}
