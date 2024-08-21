import React from 'react';

const nav = () => {
  return (
    <nav>
        <div className="logo">
        <img src="/public/brand_logo.png" alt="Brand Logo" />
        </div>
        <ul>
        <a href="#">
            <li>Menu</li>
        </a>
        <a href="#">
            <li>Location</li>
        </a>
        <a href="#">
            <li>About</li>
        </a>
        <a href="#">
            <li>Contact</li>
        </a>
        </ul>
        <a  className='login' href="#">Login</a>

    </nav>
  )
}

export default nav