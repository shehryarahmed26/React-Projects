import React from 'react'
    let arr = [
        {
            h4: 'Your entire GitHub workflow',
            p: 'Work with issues, pull requests, checks, releases and more.',
            a: 'View all GitHub CLI commands →'
        },
        {
            h4: 'Script and customize',
            p: 'Call the GitHub API to script almost any action, and set a custom alias for any command.',
            a: 'Learn about aliases and API →'
        },
        {
            h4: 'Enterprise-ready',
            p: 'Connect to GitHub Enterprise Server in addition to GitHub.com.',
            a: 'Get set up with Enterprise →'
        },
        {
            h4: 'We <3 community',
            p: 'GitHub CLI is open source and ready for your contributions.',
            a: 'Contribute to CLI →'
        }
    ]
const services = () => {
    let newarr = arr.map((ele, i) => {
        return <div className="card w-[25%] mb-7">
            <h4 className='font-bold mb-1 text-[#1F2328] text-2xl'>{ele.h4}</h4>
            <p className='text-gray-500 mb-1 text-sm'>{ele.p}</p>
            <a className='text-blue-500 text-sm' href="#">{ele.a}</a>
        </div>
    })
  return (
    <div>
        <h2 className='text-[#1F2328] md:w-[600px] md:text-5xl w-[900px] mt-9 mb-9 px-5 text-6xl font-bold'>Goodbye, context switching. Hello, terminal.</h2>
        <div className="services flex px-6">
            {newarr}
        </div>
        <div className="states w-full h-[400px] flex justify-center items-center ">
        <div className="inner-box bg-white p-6 h-fit rounded">
            <h3 className='font-bold text-4xl mb-4'>Try GitHub on the command line</h3>
            <p className='text-gray-500 mb-8'>GitHub CLI brings GitHub to your terminal. Free and open source.</p>
            <a href="#" className='text-white bg-black w-fit mb-4 px-6 py-4 rounded text-lg'>Download For Windows</a>
            <br /> <a href="#" className='mt-6 block text-blue-600'>View installation instructions →</a>
        </div>
        </div>
    </div>
  )
}

export default services