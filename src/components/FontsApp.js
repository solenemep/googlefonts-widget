import { useState, useEffect } from "react"
import Display from "./componentsFontsApp/Display"
import Settings from "./componentsFontsApp/Settings"

const FontsApp = (props) => {
  const { lang, darkMode } = props

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
  const [text, setText] = useState(JSON.parse(localStorage.getItem('textGoogleFonts')) || lang === 'EN' ? "Sphinx of black quartz, judge my vow ?!" : 'Portez ce vieux whisky au juge blond qui fume !?')
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

  // Number
  const [number, setNumber] = useState(JSON.parse(localStorage.getItem('numberGoogleFonts')) || '28')
  const changeNumber = (event) => {
    setNumber(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem("numberGoogleFonts", JSON.stringify(number), [number])
  }
  )

  // Color
  const [color, setColor] = useState(JSON.parse(localStorage.getItem('colorGoogleFonts')) || 'black')
  const changeColor = (event) => {
    setColor(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem("colorGoogleFonts", JSON.stringify(color), [color])
  }
  )

  return (
    <div className="row">
      <Settings lang={lang} darkMode={darkMode} choice={choice} changeChoice={changeChoice} text={text} changeText={changeText} size={size} changeSize={changeSize} number={number} changeNumber={changeNumber} color={color} changeColor={changeColor} />
      <Display lang={lang} darkMode={darkMode} choice={choice} text={text} size={size} number={number} color={color} />
    </div>
  )
}
export default FontsApp