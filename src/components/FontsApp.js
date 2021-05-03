import { useState } from "react"
import Display from "./componentsFontsApp/Display"
import Settings from "./componentsFontsApp/Settings"

const FontsApp = (props) => {
  const { } = props

  // Choice
  const [choice, setChoice] = useState('date')
  const changeChoice = (event) => {
    setChoice(event.target.value)
  }

  // Text
  const [text, setText] = useState('')
  const changeText = (event) => {
    setText(event.target.value)
  }

  // Size
  const [size, setSize] = useState('33')
  const changeSize = (event) => {
    setSize(event.target.value)
  }

  return (
    <div className="row my-5">
      <Settings choice={choice} changeChoice={changeChoice} text={text} changeText={changeText} size={size} changeSize={changeSize} />
      <Display choice={choice} text={text} size={size} />
    </div>
  )
}
export default FontsApp