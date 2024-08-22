import React, { useState } from 'react'
import './App.css'
import Startgame from './components/Startgame'
import Gameplay from './components/Gameplay'

const App = () => {
  let [Gamestate, setGamestate] = useState(true)
  let toggle = () => {
    setGamestate(!Gamestate)
  }
  return (
    <div>
      {Gamestate ? <Startgame togglebtn={toggle} /> : <Gameplay/>}
    </div>
  )
}

export default App