import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Products from './components/Products'

const App = () => {
  const [data, setdata] = useState([])
  const [filterarr, setfilterarr] = useState([])
  const [searchval, setsearchval] = useState('')
  console.log(searchval);
  
  useEffect(() => {
    let getproducts = async () => {
    try {
      let products = await fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      let Data = await products;
      setdata(Data)
      // console.log(data);
    }
    catch (e) {
     console.log('Error', e);
     
    }
    }
    getproducts();
  }, [])
  return (
    <div>
      <Nav/>
      <Products data={data} search={setsearchval} newdata={filterarr}/>
    </div>
  )
}

export default App