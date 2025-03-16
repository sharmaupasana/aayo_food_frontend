import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './components/navbar'
import Footer from './components/footer'

function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App