import React from 'react'
import FontArticle from "./FontArticle"

const Display = (props) => {
  const { lang, darkMode, polices, choice, text, size, number, color, loading, error } = props
  // const CHOICE = choice.toUpperCase()

  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3">
          {choice === 'alpha' && lang === 'EN' && <span className="badge bg-danger">Alphabetical</span>}
          {choice === 'alpha' && lang === 'FR' && <span className="badge bg-danger">Alphabétique</span>}
          {choice === 'date' && lang === 'EN' && <span className="badge bg-danger">Most recent</span>}
          {choice === 'date' && lang === 'FR' && <span className="badge bg-danger">Les plus récentes</span>}
          {choice === 'popularity' && lang === 'EN' && <span className="badge bg-danger">Most popular</span>}
          {choice === 'popularity' && lang === 'FR' && <span className="badge bg-danger">Les plus populaires</span>}
          {choice === 'trending' && lang === 'EN' && <span className="badge bg-danger">Top 10 trending</span>}
          {choice === 'trending' && lang === 'FR' && <span className="badge bg-danger">Top 10 tendances</span>}
          {choice === 'style' && lang === 'EN' && <span className="badge bg-danger">Most styled</span>}
          {choice === 'style' && lang === 'FR' && <span className="badge bg-danger">Les plus stylisées</span>}
        </h2>
        {loading && lang === 'EN' && <p className="text-center">loading...</p>}
        {loading && lang === 'FR' && <p className="text-center">chargement...</p>}
        {!!error && <p className="m-3 text-center alert alert-danger">{error}</p>}
        {!loading &&
          <React.Fragment>

            {polices.slice(0, number).map((police) => {
              return (
                <article className="col-lg-6 mb-4" key={police.family}>
                  <FontArticle
                    lang={lang}
                    darkMode={darkMode}
                    policeFamily={police.family}
                    policeVariants={police.variants.length}
                    policeCategory={police.category}
                    text={text}
                    size={size}
                    color={color} />
                </article>)
            })
            }
          </React.Fragment>}
      </section>
    </div>
  )
}
export default Display