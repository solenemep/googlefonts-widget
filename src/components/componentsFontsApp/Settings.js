import React from 'react'

const Settings = (props) => {
  const { lang, darkMode, choice, changeChoice, text, changeText, size, changeSize, number, changeNumber, color, changeColor } = props
  return (
    <div className="col-lg-3 mb-4">

      <form style={{ position: "sticky", top: "0px" }}>
        <div className="mb-3">
          {lang === 'EN' &&
            <label className="fw-bold mb-3" htmlFor="sort">Display fonts</label>}
          {lang === 'FR' &&
            <label className="fw-bold mb-3" htmlFor="sort">Afficher des polices</label>}
          <select value={choice} id="sort" className={darkMode ? "form-select bg-dark text-white mb-4" : "form-select bg-light text-dark mb-4"} onChange={changeChoice}>
            {lang === 'EN' &&
              <React.Fragment>
                <option value="alpha">Alphabetical</option>
                <option value="date">Most recent</option>
                <option value="popularity">Most popular</option>
                <option value="trending">Top 10 trending</option>
                <option value="style">More styles</option>
              </React.Fragment>}
            {lang === 'FR' &&
              <React.Fragment>
                <option value="alpha">Alphabétique</option>
                <option value="date">Les plus récentes</option>
                <option value="popularity">Les plus populaires</option>
                <option value="trending">Top 10 tendances</option>
                <option value="style">Les plus stylisées</option>
              </React.Fragment>}
          </select>
        </div>
        <div className="mb-3">
          {lang === 'EN' &&
            <label htmlFor="text" className="form-label fw-bold mb-3">Type your text</label>}
          {lang === 'FR' &&
            <label htmlFor="text" className="form-label fw-bold mb-3">Tappez votre text</label>}
          <textarea id="text" className={darkMode ? "bg-dark text-white form-control" : "bg-light text-dark form-control"} onChange={changeText} value={text}></textarea>
        </div>
        <div className="mb-3">
          {lang === 'EN' &&
            <label htmlFor="range" className="form-label fw-bold mb-3">Font size</label>}
          {lang === 'FR' &&
            <label htmlFor="range" className="form-label fw-bold mb-3">La taille de police</label>}
          <input type="range" className="form-range" id="range" min="8" max="48" step="1" value={size} onChange={changeSize} />
        </div>
        <div className="mb-3">
          {lang === 'EN' &&
            <label htmlFor="number" className="form-label fw-bold mb-3">Number of fonts</label>}
          {lang === 'FR' &&
            <label htmlFor="number" className="form-label fw-bold mb-3">Nombre de polices</label>}
          <input type="number" className={darkMode ? "bg-dark text-white form-control" : "bg-light text-dark form-control"} id="number" name="number" min="10" max="100" value={number} onChange={changeNumber} />
        </div>
        <div className="mb-3">
          {lang === 'EN' &&
            <label htmlFor="color" className="form-label fw-bold mb-3">Fonts's color</label>}
          {lang === 'FR' &&
            <label htmlFor="color" className="form-label fw-bold mb-3">Couleur de la police</label>}
          <input type="color" className={darkMode ? "bg-dark text-white form-control" : "bg-light text-dark form-control"} id="color" name="color" value={color} onChange={changeColor} />
        </div>
      </form>
    </div>
  )
}
export default Settings