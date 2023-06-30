import React from 'react'
// import Navs from './Navs'
// import { Outlet } from 'react-router-dom'



function AppTitle(props) {
  const { title = "Box office"
  , subtitle = "Are you looking for a movie or a actor"
} = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default AppTitle
