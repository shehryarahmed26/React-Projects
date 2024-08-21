import React from 'react'
import Nav from './components/Nav'
import Hero from './components/hero'
import CMD from './components/cmd'
import SERVICES from './components/services'
import './App.css'
import SUBFOOTER from './components/subfooter'
import FOOTER from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-screen main'>
      <Nav/>
      <Hero/>
      <CMD/>
      <SERVICES/>
      <SUBFOOTER/>
      <FOOTER/>
    </div>
  )
}

export default App