import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
    <div className='flex w-full justify-between py-5 px-20 items-center bg-blue-950 text-white'>
        <h2 className='text-xl font-bold'>Logo.</h2>
        <ul className=' links flex gap-10'>
            <Link to="/">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
        </ul>
            <p className='hidden menu'>Menu</p>
    </div>
  )
}

export default Header