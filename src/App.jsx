import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router'
import { Bitcoin } from './pages/Bitcoin'

function App() {


  return (
    <div className='min-h-screen bg-[#DEDFE2]'>
   <Routes>
    <Route path = "/" element = {<Bitcoin/>}/>
   </Routes>
    </div>
  )
}

export default App
