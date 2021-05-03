import FontArticle from "./FontArticle"

const Display = (props) => {
  const { } = props
  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3">
          <span className="badge bg-danger">Les plus récentes</span>
          <span className="badge bg-danger">Les plus populaires</span>
          <span className="badge bg-danger">Top 10 trending</span>
        </h2>
        <article className="col-lg-6 mb-4">
          {/* mapping liste */}
          <FontArticle />
        </article>
      </section>
    </div>
  )
}
export default Display