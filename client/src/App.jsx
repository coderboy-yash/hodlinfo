import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';


function App() {
 

  return (
    <div className='bg-[#191D28] h-screen'>
    
     
      <Navbar></Navbar>
      <div className='flex justify-center'>

      <h1 className='text-gray-500 text-4xl   '>Best Price To Trade</h1>
      </div>
        
    </div>
  )
}


export default App
