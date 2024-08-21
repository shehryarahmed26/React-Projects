import React from 'react'
import { useState } from 'react'
let arr = [
  {
    box1: 'box w-20 h-20 bg-green-800 rounded',
    color: 'bg-green-800'
  },
  {
    box1: 'box w-20 h-20 bg-purple-800 rounded'
  },
  {
    box1: 'box w-20 h-20 bg-blue-800 rounded'
  },
  {
    box1: 'box w-20 h-20 bg-blue-400 rounded'
  }
]
const App = () => {
  let [bgcolor, setbgcolor] = useState('')
  let newarr = arr.map((box, i) => {
    return <div onClick={} className={box.box1}>

    </div>
  })
 
  return (
    <div className='w-full h-screen flex justify-center items-center' >
      <div className="boxes flex gap-10">
      {newarr}
      </div>
    </div>
  )
}

export default App