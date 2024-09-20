import React from 'react'

const card = ({ text, theme }) => {
  return (
    <div className={`${theme ? 'bg-white' : 'bg-black'} flex justify-center items-center w-[45%] h-20`}>
        <h1 className={theme ? 'text-black' : 'text-white'}>{text}</h1>
    </div>
  )
}

export default card