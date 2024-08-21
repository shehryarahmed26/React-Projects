import React from 'react'

const cmd = () => {
  return (
    <div className='w-full md:h-[100vh] h-[130vh] bg-[#0D1117] flex flex-col items-center justify-center '>
          <img className='absolute md:hidden  top-[350px] ' src="./public/asset 4.svg" alt="" />
        <h3 className='text-white text-xl mb-2'><span className='text-blue-800'>$</span> gh issue</h3>
        <p className='text-white mb-7' >Check out pull requests locally.</p>
        <div className="cmd w-[80%] bg-black h-[480px] mb-7 p-3 z-20 rounded px-6">
        <div className='cmd-top w-full flex justify-between  px-3 '>
            <div className="btns flex gap-2">           
        <div className="circle w-3 h-3 bg-gray-900 hover:bg-green-600 rounded-full cursor-pointer">
            </div>
            <div className="circle w-3 h-3 bg-gray-900 rounded-full hover:bg-red-600 cursor-pointer">
            </div>           
            <div className="circle w-3 h-3 bg-gray-900 rounded-full hover:bg-yellow-600 cursor-pointer">
            </div>
            </div>
            <div>
            <div  className='outline-white bg-white w-fit h-fit'>
                <img className='outline-white' src="./public/asset 6.svg" alt="" />
            </div>
            </div>
        </div>
        <p className='text-white'>$ gh repo v</p>
        <p className='text-white'>cli/cli</p>
        <p className='text-white'>GitHub’s official command line tool</p>
        <div className="cmd-text p-6">
        <button className='text-white mb-7 bg-purple-500 px-3 py-1 font-bold'>Github CLI</button>
        <p className='text-white mb-5'>gh is GitHub on the command line. It brings pull requests, issues, and other GitHub concepts to the terminal next to where you are already working with git and your code.</p>
        <p className='text-[#DB609D] mb-5'><span className='text-[#6E7681]'>Image: screenshot of gh pr status →</span> https://user-images.githubusercontent.com/98482/84171218-327e7a80-aa40-11ea-8cd1-5177fc2d0e72.png</p>
        <p className='text-[#6E7681]'>View this repository on GitHub: https://github.com/cli/cli</p>
        </div>
        </div>
        <h2 className='text-white font-bold text-2xl'>View all GitHub CLI commands →</h2>
        

    </div>
  )
}

export default cmd