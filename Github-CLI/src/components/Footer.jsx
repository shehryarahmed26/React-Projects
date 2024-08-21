import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-8 w-full h-16 items-center bg-gray-100'>
        <div className="left flex gap-5">
            <p className='text-gray-500 text-sm'>© 2024 GitHub, Inc.</p>
            <a href="#" className='text-gray-500 text-sm' >Terms</a>
            <a href="#" className='text-gray-500 text-sm' >Privacy</a>
        </div>
        <div className="right flex gap-4">
            <img src="./public/asset 9.svg" alt="" />
            <img src="./public/asset 10.svg" alt="" />
            <img src="./public/asset 11.svg" alt="" />
            <img src="./public/asset 12.svg" alt="" />
            <img src="./public/asset 13.svg" alt="" />
        </div>
    </div>
  )
}

export default Footer