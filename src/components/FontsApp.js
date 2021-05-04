import { useState, useEffect, useRef } from "react"
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
  const [number, setNumber] = useState(JSON.parse(localStorage.getItem('numberGoogleFonts')) || '20')
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

  // Appel à l'API `https://webfonts.googleapis.com/v1/webfonts?sort=${CHOICE}&key=${process.env.REACT_APP_GOOGLEFONTS_API_KEY}`
  const [polices, setPolices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cancelRef = useRef(null)
  const controllerRef = useRef(null)

  useEffect(() => {
    cancelRef.current = false
    controllerRef.current = new AbortController()
    // mounts
    console.log("I mounted")
    return () => {
      //unmounts
      console.log("I unmount")
      cancelRef.current = true
      controllerRef.current.abort()
    }
  }, [])

  useEffect(() => {
    console.log("use effect starts with ", choice)
    console.log(cancelRef)
    setLoading(true);
    fetch(`https://webfonts.googleapis.com/v1/webfonts?sort=${choice.toUpperCase()}&key=${process.env.REACT_APP_GOOGLEFONTS_API_KEY}`, {
      signal: controllerRef.current.signal
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          `We could not get polices, status : ${response.status}`
        );
      })
      .then((data) => {
        console.log("I get data")
        console.log(data)
        if (!cancelRef.current) {
          console.log("will update component");
          setPolices(data.items)
          setLoading(false);
        }
      })
      .catch((error) => {
        if (!cancelRef.current) {
          setError(error.message)
          console.log(error.message)
          setLoading(false)
        }
      })
  }, [choice]);

  // Filter by category 
  const allCategory = (list) => {
    let listTotal = []
    for (let el of list) {
      if ("category" in el) {
        listTotal = listTotal.concat(el.category)
      }
    }
    const listCategoryUnique = []
    listTotal.forEach((el) => {
      if (!listCategoryUnique.includes(el)) {
        listCategoryUnique.push(el)
      }
    })
    return listCategoryUnique
  }
  const categories = allCategory(polices)

  const [filter, setFilter] = useState("all")
  const changeFilter = (event) => {
    setFilter(event.target.value)
  }
  const filterPolices = (filter) => {
    if (filter === "all") {
      return polices
    }
    else {
      return polices.filter((police) => (police.category === filter))
    }
  }
  const filteredPolices = filterPolices(filter)

  return (
    <div className="row">
      <Settings lang={lang} darkMode={darkMode} choice={choice} changeChoice={changeChoice} text={text} changeText={changeText} size={size} changeSize={changeSize} number={number} changeNumber={changeNumber} categories={categories} filter={filter} changeFilter={changeFilter} color={color} changeColor={changeColor} />
      <Display lang={lang} darkMode={darkMode} polices={filteredPolices} choice={choice} text={text} size={size} number={number} color={color} loading={loading} error={error} />
    </div>
  )
}
export default FontsApp