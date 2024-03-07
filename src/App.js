import React from 'react'
import Top from './components/Top'
import {Routes, Route } from "react-router-dom"
import About from './components/About'


const App = () => {
  return (
    <>
<Top />
<Routes>
<Route path='/' element={<Top/>} /> 
  <Route path='/about' element={<About/>} /> 
</Routes>
    </>
  )
}

export default App

