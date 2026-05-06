import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieCard from './MovieCard'
import Body from './Body'

function Router() {
  return (
    <Routes>
      
        <Route path='/moviecard/:name' element={<MovieCard/>}/>
    </Routes>
  )
}

export default Router
