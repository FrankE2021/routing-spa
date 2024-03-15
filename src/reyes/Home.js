import { Link } from "react-router-dom"

function Home() {
  const lista=["atanagildo","ervigio","sisebuto","ataulfo","leovigildo","recesvinto"]

  return (
    <div className="reyes">
      {
        lista.map(unRey=>
          <Link to={`/reyes/${unRey}`}><img src={`http://www.html6.es/img/rey_${unRey}.png`}/></Link>)
      }
    </div>
  )
}

export default Home
