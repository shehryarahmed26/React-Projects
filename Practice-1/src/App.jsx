import React from 'react'
import { useState } from 'react'


const App = () => {

  const [todo, settodo] = useState("");
  const [Task, setTask] = useState([]);
  let addtodo = (e) => {
    setTask([...Task, todo])
    settodo('')
    
    
    
    
  }
  let rendertask = <h5 className='mt-3'>No Tasks Available </h5>
  if (Task.length > 0) {
   rendertask = Task.map((t, i) => {
    return (
      <div key={i} className='flex justify-between mt-3'>
        <h5>{t}</h5>
        <button onClick={deltodo} key={i} className='bg-red-600 px-2 text-white rounded text-sm'>Delete</button>
      </div>
    
    )
    
  })
  function deltodo (i) {
    let copytask = [...Task]
    copytask.splice(i,1)
    setTask(copytask);
  }
  
}
  return (
    <>
    <main className='w-full h-screen bg-blue-950 flex justify-center items-center'>
    <div className="container flex justify-center w-1/3 bg-white h-fit p-4 -translate-y-10 rounded">
    <div className="todo">
    <h1 className='text-center font-bold text-4xl mb-5'>Todo App </h1>
    <input onChange={(e) => settodo(e.target.value)} type="text" value={todo} className='border-b-2 border-cyan-800 mx-5 focus:outline-none' placeholder='Enter Your Task Here'/>
    <button onClick={addtodo} className='bg-green-700 text-white px-3 rounded mx-5'>Add</button>
    <ul>
    {rendertask}
    </ul>
    </div>
    </div>
    </main>
    </>
  )
}

export default App