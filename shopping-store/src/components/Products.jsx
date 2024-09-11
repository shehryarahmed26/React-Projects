import React from 'react'

const Products = ({data, search, setsearchval}) => {
    console.log(data);
    let inputhandler = (e) => {
        
    }
    let productsrender = data.map((product, i) => {
        return <div key={i} className='flex flex-col w-[20%] my-3'>
            <img className='w-[70%] h-[220px]' src={product.image} alt="" />
            <p className='text-xs my-2'>{product.category}</p>
            <h2 className='font-bold my-2'>{product.title}</h2>
            <p className='text-sm'>{product.description}</p>
            <div className="pricing-box flex justify-between">
               <span>{product.rating.rate}</span> <span>${product.price}</span>
            </div>
        </div>
    } )
  return (
    
    <div>
        <div className="header">
            <div className="header flex items-center justify-center w-full gap-36">
            <h1 className='text-slate-900 font-bold text-5xl text-center my-10'>Products</h1>
            <div className="search-area"><input onChange={inputhandler} className='border mx-5' type="text" />
            <button className='text-white bg-green-600 px-2 rounded py-1'>Search</button></div>
            </div>
            <div className="products-container flex flex-wrap justify-center items-start gap-5">
                {productsrender}
            </div>
        </div>
    </div>
  )
}

export default Products