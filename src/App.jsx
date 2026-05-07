import React, { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Router from './Components/Router'
import Overlay from './Components/Overlay'
import { useLocation } from 'react-router-dom'

function App() {

  let [page, setPage] = useState(false)
  let location = useLocation()
  return (
    <>
      <Header setPage={setPage} />
      <Router />
      {/* <Overlay/> */}

      {page && <Overlay setPage={setPage}/>}
      
      {location.pathname === '/' && <Body setPage={setPage} /> }

    </>
  )
}

export default App
