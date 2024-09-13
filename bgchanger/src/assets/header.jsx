import React from 'react'
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <div className='absolute top-4  flex justify-center w-full gap-10  text-gray-900 font-semibold'>
        <Link to="./Home">Home</Link>
        <Link to="./Contact">Contact</Link>
        <Link to="./About">About</Link>
    </div>
  )
}

export default header