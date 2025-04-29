import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputContainer from './components/InputContainer'

function App() {
  

  return (
    <>
    
      <div className='bg-blue-200 w-screen flex flex-col justify-center items-center h-screen bg-linear-to-r from-blue-200 to-blue-500'>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl  text-blue-800">Paste In</h1>
        <h1 className='text-xl'>Add the Notes,Essay or Content you would like to use </h1>
        {/* <h2 className="text-4xl font-bold dark:text-white">Heading 2</h2> */}
        <br />
        
        <InputContainer/>
      </div>
      
        
    </>
  )
}

export default App
