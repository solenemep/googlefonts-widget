import FontArticle from "./FontArticle"

const Display = (props) => {
  const { choice, text, size } = props

  // Appel à l'API

  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3">
          {choice === 'date' && <span className="badge bg-danger">Les plus récentes</span>}
          {choice === 'popularity' && <span className="badge bg-danger">Les plus populaires</span>}
          {choice === 'trending' && <span className="badge bg-danger">Top 10 trending</span>}
        </h2>
        <article className="col-lg-6 mb-4">
          {/* mapping liste */}
          <FontArticle text={text} size={size} />
        </article>
      </section>
    </div>
  )
}
export default Display