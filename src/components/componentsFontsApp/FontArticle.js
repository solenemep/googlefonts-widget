import GoogleFontLoader from 'react-google-font-loader'

const FontArticle = (props) => {
  const { lang, darkMode, policeFamily, policeVariants, policeCategory, size, text, color } = props
  const urlPolice = policeFamily.split(' ').join(' ', '+')
  const url = `https://fonts.google.com/specimen/${urlPolice}`
  return (
    <div className={darkMode ? "bg-dark shadow-sm border rounded p-3 h-100" : "bg-light shadow-sm border rounded p-3 h-100"}>
      <h2 className="h6 d-flex align-items-center justify-content-between">
        <span>{policeFamily}</span>
        {lang === 'EN' && <small>{policeVariants} variant(s)</small>}
        {lang === 'FR' && <small>{policeVariants} variante(s)</small>}
      </h2>
      <p>
        <span className={darkMode ? "badge bg-light text-dark" : "badge bg-dark text-white"}>{policeCategory.toUpperCase()}</span>
      </p>
      <GoogleFontLoader
        fonts={[
          {
            font: `${policeFamily}`,
          }
        ]} />
      <p className={darkMode ? "sample bg-black p-3 rounded" : "sample rounded bg-white p-3"} style={{
        fontFamily: `${policeFamily}, ${policeCategory}`, fontSize: `${size}px`, color: `${color}`
      }}>{text}</p>
      {lang === 'EN' && <a rel="noopener noreferrer" target="_blank" className="text-danger" href={url}>See on Google Fonts (open new tab)</a>}
      {lang === 'FR' && <a rel="noopener noreferrer" target="_blank" className="text-danger" href={url}>Voir sur Google Fonts (ouvre un nouveau tab)</a>}
    </div >
  )
}
export default FontArticle