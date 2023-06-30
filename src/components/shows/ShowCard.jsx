import React from 'react'
import { Link } from 'react-router-dom'

function ShowCard({name , image , id , summary}) {

  const summaryStripped = summary ? summary.split('').slice(0,1000).join('').replace(/<.+?>/gi, "") : "no description" ;
  return (
    <div>
    <div>
    <img src={image} alt={name}/>
    </div>
      <h1>{name}</h1>
     
      <p>{summaryStripped}</p>
      <div>
        <Link to={`/show/${id}`}>Read more...</Link>
        <button type="button">Star me</button>
      </div>
     
    </div>
  )
}



export default ShowCard
