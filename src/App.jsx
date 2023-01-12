import React from 'react'
import Navbar from './components/navbar/navbar'
import MobileHeader from './components/header/mobileHeader'
import Home from './routerPages/home/home'


const App = () => {
  return (
    <>
      <MobileHeader/>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App