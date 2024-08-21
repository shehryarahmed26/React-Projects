import React from 'react'

const subfooter = () => {
  return (
    <div className='w-full md:flex-col md:items-start flex justify-between px-5 mt-10 mb-20'> 
        <div className="logo pl-3 md:mb-8">
    <img src="./public/asset 8.svg" alt="" />
        </div>
        <div className="details flex gap-20 pr-24 md:pl-3">
            <div className="product flex flex-col gap-3">
                <h4>Product</h4>
                <a href="#" className='text-gray-500 text-sm'>Features</a>
                <a href="#" className='text-gray-500 text-sm' >Security</a>
                <a href="#" className='text-gray-500 text-sm' >Enterprise</a>
                <a href="#" className='text-gray-500 text-sm' >Customer Services</a>
                <a href="#" className='text-gray-500 text-sm' >Pricing</a>
                <a href="#" className='text-gray-500 text-sm' >Resources</a>
            </div>
            <div className="Platform flex flex-col gap-3">
            <h4>Platform</h4>
                <a href="#" className='text-gray-500 text-sm' >Developer API</a>
                <a href="#" className='text-gray-500 text-sm' >Partners</a>
                <a href="#" className='text-gray-500 text-sm' >GitHub Desktop</a>
                <a href="#" className='text-gray-500 text-sm' >GitHub Mobile</a>
            </div>
            <div className="Support flex flex-col gap-3">
            <h4>Support</h4>
                <a href="#" className='text-gray-500 text-sm'>Help</a>
                <a href="#" className='text-gray-500 text-sm' >Community Forum</a>
                <a href="#" className='text-gray-500 text-sm' >Expert Services</a>
                <a href="#" className='text-gray-500 text-sm' >Status</a>
                <a href="#" className='text-gray-500 text-sm' >Contact GitHub</a>
            </div>
            <div className="Company flex flex-col gap-3">
            <h4>Company</h4>
                <a href="#" className='text-gray-500 text-sm' >About</a>
                <a href="#" className='text-gray-500 text-sm' >Blog</a>
                <a href="#" className='text-gray-500 text-sm' >Careers</a>
                <a href="#" className='text-gray-500 text-sm' >Press</a>
                <a href="#" className='text-gray-500 text-sm' >Shop</a>
            </div>
        </div>
    </div>
  )
}

export default subfooter