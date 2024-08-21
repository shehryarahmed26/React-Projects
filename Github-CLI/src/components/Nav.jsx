import React from 'react'
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className='flex justify-between px-12  text-white h-16 items-center'>
        <div className="nav-left flex gap-2 items-center">
          <FaGithub size={30}/>
        <a href="#">CLI</a>
        </div>
        <div className="nav-right flex gap-4">
        <a href="#">Manual</a>
        <a href="#">Release note</a>
        </div>
    </nav>
  )
}

export default Nav