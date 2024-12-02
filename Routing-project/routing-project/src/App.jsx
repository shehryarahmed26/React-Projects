import React, { useEffect, useState } from 'react'
import { addDoc, collection, db, getDocs, getDownloadURL, ref, Storage, uploadBytes } from './Utils/Firebase'

const App = () => {
  const [img, setimg] = useState('')
  const [imgs, setimgs] = useState([])
  const [arr, setarr] = useState([])
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const [products, setproducts] = useState([])
  
  const handleposts = () => {
    if (img) {
      const imgref = ref(Storage, `images/${img.name}`)
      uploadBytes(imgref, img)
      .then((snapshot) => {
        console.log('Uploaded a blob or file!')
        console.log(img);
        setimg('')
        getDownloadURL(imgref)
        .then((url) => {
          console.log(url);
  
          const datahandler = async ()  => {
            try {
              const docRef = await addDoc(collection(db, "Products"), {
                title: title,
                Price: price, 
                img: url
              });
              // console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }
  
          datahandler();
          setprice('')
          settitle('')
          const getdata = async () => {
            const querySnapshot = await getDocs(collection(db, "Products"));
            setarr([])
            querySnapshot.forEach((doc) => {
              arr.push(doc.data())
      // const newarr = [];
      // setimgs([...newarr, ...newarr])
      // console.log(imgs);
      
  });
  setproducts([...arr])
  // console.log(imgs);
          }
          getdata();
          
        })
        
      });
    }
  }
  // useEffect(() => {
  //     }, [img])
  return (
    <div>
      <h1 className='text-center text-3xl font-bold my-6'>Add Product</h1>
      <div className="details flex flex-col justify-center items-center">
        <p>Title:</p>
      <input className='border border-black rounded hover:outline-none hover:border' value={title} onChange={(e) => settitle(e.target.value)} type="text" name="" id="" />
      <p>Price:</p>
      <input className='border border-black rounded hover:outline-none hover:border' value={price} onChange={(e) => setprice(e.target.value)} type="number" name="" id="" />
      <br />
      <input  onChange={(e) => setimg(e.target.files[0])} type="file" name="" id="" />
      <br />
      <button onClick={handleposts} className='bg-black px-6 rounded text-white'>Save</button>
      </div>
      <div className='flex flex-wrap justify-between px-10 gap-10'>
        {products.map((product, i) => (
          <div className='flex flex-col flex-wrap w-[300px]'>
            <img className='w-full' src={product.img} alt="" />
            <h3 className='text-lg font-semibold'>{product.title}</h3>
            <h3 className='text-lg font-semibold'>Price: Pkr {product.Price}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App