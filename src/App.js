import React from 'react'
import Hero from './components/Hero'
import Opensea from './components/Opensea'
import "./index.css"
import Topbar from './layouts/Topbar'
const App = () => {
  return (
    <div className=' min-h-screen w-full  full_bg'>
      <Topbar/>
      <Hero/>
      <Opensea/>
    </div>
  )
}

export default App