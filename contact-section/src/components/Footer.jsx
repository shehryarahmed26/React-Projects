import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";



const Footer = () => {
  return (
    <div className='flex  justify-center gap-2'>
        <form action="#" className='mt-6 ml-10'>
            <div className="btns flex gap-5">
            <button className='flex bg-black text-white text-sm items-center gap-3 p-2 rounded' ><MdOutlineMessage/>VIA SUPPORT CHAT</button>
            <button className='flex bg-black text-white text-sm items-center gap-3 py-1 px-12 rounded' ><IoMdCall/>VIA CALL</button>
            </div>
            <button className='border-black mb-10 flex items-center w-full justify-center mt-5 border p-2 rounded font-bold gap-2'><MdOutlineMessage/>VIA EMAIL FORM</button>
            <div className="name relative mb-8">
                <input className=' z-0  py-1 w-full' type="text" />
                <label className='absolute -top-4 px-1 left-4 z-10 bg-white font-bold' htmlFor="">Name</label>
            </div>
            <div className="email  relative mb-8">
                <input className=' py-1 w-full' type="email" />
                <label htmlFor="" className='absolute px-1 -top-4 left-4 z-10 bg-white font-bold'>E-Mail</label>
            </div>
            <div className="t-area relative">
                <textarea className='w-full' name="" id="" cols="30" rows="4"></textarea>
                <p className='absolute -top-4 left-4 z-10 bg-white px-1 font-bold'>TEXT</p>
            </div>
            <button className='bg-black text-white px-16 py-2 rounded float-end mt-4    '>SUBMIT</button>
        </form>
        <img className='w-[520px]' src="./public/Service 24_7-pana 1.svg" alt="" />
    </div>
  )
}

export default Footer