import { useState, useEffect } from "react"
import Display from "./componentsFontsApp/Display"
import Settings from "./componentsFontsApp/Settings"

const FontsApp = () => {

  // Choice
  const [choice, setChoice] = useState(JSON.parse(localStorage.getItem('choiceGoogleFonts')) || 'date')
  const changeChoice = (event) => {
    setChoice(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem("choiceGoogleFonts", JSON.stringify(choice), [choice])
  }
  )

  // Text
  const [text, setText] = useState(JSON.parse(localStorage.getItem('textGoogleFonts')) || 'Portez ce vieux whisky au juge blond qui fume !?')
  const changeText = (event) => {
    setText(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem("textGoogleFonts", JSON.stringify(text), [text])
  }
  )

  // Size
  const [size, setSize] = useState(JSON.parse(localStorage.getItem('sizeGoogleFonts')) || '28')
  const changeSize = (event) => {
    setSize(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem("sizeGoogleFonts", JSON.stringify(size), [size])
  }
  )

  return (
    <div className="row my-5">
      <Settings choice={choice} changeChoice={changeChoice} text={text} changeText={changeText} size={size} changeSize={changeSize} />
      <Display choice={choice} text={text} size={size} />
    </div>
  )
}
export default FontsApp