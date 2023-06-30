import React from 'react'
import {useParams} from 'react-router-dom'

function Show() {

  const {showId} = useParams();


  return (
    <div>
      show page for {showId}
    </div>
  )
}

export default Show
