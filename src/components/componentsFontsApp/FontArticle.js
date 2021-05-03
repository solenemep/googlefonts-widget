const FontArticle = (props) => {
  const { size, text } = props
  return (
    <div className="shadow-sm border p-3 h-100">
      <h2 className="h-6 d-flex align-items-center justify-content-between">
        <span></span>
        <small>variant(s)</small>
      </h2>
      <p>
        <span className="badge bg-dark"></span>
      </p>
      <p className="sample" style={{ "font-size": `${size}px` }}>{text}</p>
      <a rel="noopener noreferrer" target="_blank" href="">Voir sur Google Fonts (ouvre un nouveau tab)</a>
    </div >
  )
}
export default FontArticle