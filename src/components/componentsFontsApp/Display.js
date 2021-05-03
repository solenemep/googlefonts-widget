import React, { useState, useEffect, useRef } from 'react'
import FontArticle from "./FontArticle"

const Display = (props) => {
  const { choice, text, size } = props
  // const CHOICE = choice.toUpperCase()

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
    /*let isCancelled = false
    const controller = new AbortController()
    //signal: controller.signal
    }) */
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
      });
    return () => {
      /*console.log("clean up")
       console.log("I want to cancel")
       isCancelled = true
       controller.abort()*/
    }
  }, [choice]);


  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3">
          {choice === 'date' && <span className="badge bg-danger">Les plus récentes</span>}
          {choice === 'popularity' && <span className="badge bg-danger">Les plus populaires</span>}
          {choice === 'trending' && <span className="badge bg-danger">Top 10 trending</span>}
        </h2>
        {loading && <p className="text-center">loading...</p>}
        {!!error && <p className="px-2 text-center alert alert-danger">{error}</p>}
        {!loading &&
          <React.Fragment>
            {polices.slice(0, 10).map((police) => {
              return (
                <article className="col-lg-6 mb-4" key={police.family}>
                  <FontArticle
                    policeFamily={police.family}
                    policeVariants={police.variants.length}
                    policeCategory={police.category}
                    text={text}
                    size={size} />
                </article>)
            })
            }
          </React.Fragment>}
      </section>
    </div>
  )
}
export default Display