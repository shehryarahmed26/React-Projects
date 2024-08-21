import React from 'react'

const hero = () => {
  return (
    <div className='flex flex-col justify-center w-[550px] mx-auto font-bold'>
        <h1 className='text-[#E6EDF3] text-7xl mb-3'>Take GitHub to the command line</h1>
        <h3 className='text-[#6E7681] sm:text-xl text-2xl mb-7'>GitHub CLI brings GitHub to your terminal. Free and open source.</h3>
        <a href="#" className='text-[#0D1117] bg-white w-fit mb-4 px-6 py-4 rounded text-lg'>Download For Windows</a>
        <p className='text-white font-light'>View installation instructions → </p>
    </div>
  )
}

export default hero