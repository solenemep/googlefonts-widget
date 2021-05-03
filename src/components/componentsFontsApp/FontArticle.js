import GoogleFontLoader from 'react-google-font-loader'

const FontArticle = (props) => {
  const { policeFamily, policeVariants, policeCategory, size, text } = props
  const urlPolice = policeFamily.split(' ').join(' ', '+')
  const url = `https://fonts.google.com/specimen/${urlPolice}`
  return (
    <div className="shadow-sm border p-3 h-100">
      <h2 className="h6 d-flex align-items-center justify-content-between">
        <span>{policeFamily}</span>
        <small>{policeVariants} variant(s)</small>
      </h2>
      <p>
        <span className="badge bg-dark">{policeCategory.toUpperCase()}</span>
      </p>
      <GoogleFontLoader
        fonts={[
          {
            font: `${policeFamily}`,
          }
        ]} />
      <p className="sample" style={{ fontFamily: `${policeFamily}, ${policeCategory}`, fontSize: `${size}px` }}>{text}</p>
      <a rel="noopener noreferrer" target="_blank" className="text-danger" href={url}>Voir sur Google Fonts (ouvre un nouveau tab)</a>
    </div >
  )
}
export default FontArticle