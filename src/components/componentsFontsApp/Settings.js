const Settings = (props) => {
  const { choice, changeChoice, text, changeText, size, changeSize } = props
  return (
    <div className="col-lg-3 mb-4">
      <form style={{ position: "sticky" }, { top: "0px" }}>
        <label className="fw-bold mb-2" htmlFor="sort">Afficher des polices</label>
        <select value={choice} id="sort" className="form-select mb-4" onChange={changeChoice}>
          <option value="date">Les plus récentes</option>
          <option value="popularity">Les plus populaires</option>
          <option value="trending">Top 10 trending</option>
        </select>
        <div className="mb-3">
          <label htmlFor="text" className="form-label fw-bold mb-3">Tappez votre text</label>
          <textarea id="text" className="form-control" onChange={changeText} value={text}></textarea>
        </div>
        <label htmlFor="range" className="form-label fw-bold mb-3">La taille de police</label>
        <input type="range" className="form-range" id="range" min="8" max="48" step="1" value={size} onChange={changeSize} />
      </form>
    </div>
  )
}
export default Settings