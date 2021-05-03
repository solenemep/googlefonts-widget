import React, { useState, useEffect } from "react";
import FontsApp from "./components/FontsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preference from "./components/Preference"

function App() {

  // Langague
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('langGoogleFonts')) || 'EN')
  const changeLang = (event) => {
    setLang(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem("langGoogleFonts", JSON.stringify(lang), [lang])
  }
  )

  // DarkMode
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkModeGoogleFonts')) || false)
  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    localStorage.setItem("darkModeGoogleFonts", JSON.stringify(darkMode))
  }
  )

  return (
    <React.Fragment>
      <Header darkMode={darkMode}>
        {lang === 'EN' &&
          <React.Fragment>
            <h1>What's up, Google Fonts™&nbsp;?</h1>
            <p className="h4">
              Most recent, <i>trendiest</i> and most popular Google fonts.
        </p>
          </React.Fragment>}
        {lang === 'FR' &&
          <React.Fragment>
            <h1>Quoi de neuf, Google Fonts™&nbsp;?</h1>
            <p className="h4">
              Les plus récentes, les plus <i>tendances</i> et les plus populaires polices de Google.
        </p>
          </React.Fragment>}

        <Preference lang={lang} changeLang={changeLang} darkMode={darkMode} changeDarkMode={changeDarkMode} />
      </Header>
      <div className={darkMode ? "bg-black text-white" : "bg-white text-dark"}>
        <div className="container py-5 min-vh-100">
          <FontsApp lang={lang} darkMode={darkMode} />
        </div>
      </div>
      {
        lang === 'EN' &&
        <Footer>
          With Love&nbsp;& React for Alyra
      </Footer>
      }
      {
        lang === 'FR' &&
        <Footer>
          Avec Amour&nbsp;& React pour Alyra
      </Footer>
      }
    </React.Fragment >
  );
}

export default App;
