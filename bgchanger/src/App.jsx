import React, { useState } from 'react'

const App = () => {
  let [color, recolor] = useState('')
  let colorhandler = (bg) => {
      console.log(bg);
      recolor(bg)
  }
  return (

    <div className={`${color} w-full h-screen flex justify-center items-center` }>
      <div className="boxes flex gap-5">
        <div onClick={() => colorhandler('bg-purple-700')} className="box w-20 h-20 bg-purple-700 border-2"></div>
        <div onClick={() => colorhandler('bg-green-700')} className="box w-20 h-20 bg-green-700 border-2"></div>
        <div onClick={() => colorhandler('bg-yellow-500')} className="box w-20 h-20 bg-yellow-500 border-2"></div>
        <div onClick={() => colorhandler('bg-blue-700')} className="box w-20 h-20 bg-blue-700 border-2"></div>
      </div>
    </div>
  )
}

export default App