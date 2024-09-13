import React from 'react'
import Header from './Components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services'
import Contact from './Components/Contact'
import About from './Components/About'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App