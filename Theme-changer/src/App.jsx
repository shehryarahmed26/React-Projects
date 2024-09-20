import React, { useState } from 'react'
import Card from './components/card'

const App = () => {
  const [theme, settheme] = useState('')
  return (
    <div className={theme ? 'bg-black w-full h-screen flex justify-center' : 'bg-white w-full h-screen flex justify-center'}>
      <div className='w-[60%]'>
      <h1  onClick={() => settheme(!theme)} className={`${theme ? 'bg-white text-black' : 'bg-black text-white'} text-white w-[100%] py-6 mx-auto text-center cursor-pointer mt-12`}>Theme Changer</h1>
      <div className='flex justify-between w-[100%] flex-wrap px-20  gap-10 mt-28'>
      <Card text='Shehryar' theme={theme}/>
      <Card text='Inam' theme={theme}/>
      <Card text='Samar' theme={theme}/>
      <Card text='Siddiqui' theme={theme}/>
    </div>  
    </div>
    </div>
  )
}

export default App