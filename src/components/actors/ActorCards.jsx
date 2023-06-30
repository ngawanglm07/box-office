import React from 'react'

function ActorCard({name , image ,gender , country , birthday , deathday }) {
 
  return (
    <div>
    
    <div>
    <img src={image} alt={name}/>
    </div>
      <h1>{name} {!!gender && `(${gender})`}</h1>
      <p>{country ? `comes from ${country}` : 'no country known'}</p>
      

      {!!birthday && <p>`Born on ${birthday}`</p>}
      <p>{deathday ? `died on ${deathday} `: 'alive'}</p>
   
     
   
    </div>
  )
}

export default ActorCard;
