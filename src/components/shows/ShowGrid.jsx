import React from 'react'
import ShowCard from './ShowCard'

function ShowGrid({shows}) {
  return (
    <div>
      {shows.map(data => (
       <ShowCard 
       key={data.show.id} 
       id = {data.show.id}
       name={data.show.name} 
       image={data.show.image ? data.show.image.medium : '/img-not-found.jpeg'} 
       summary={data.show.summary}
       />
       
        
      ))}
    </div>
  )
}

export default ShowGrid
