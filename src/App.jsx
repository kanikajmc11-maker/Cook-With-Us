import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Recipes from './pages/Recipes.jsx'
import Tips from './pages/Tips.jsx'
import Community from './pages/Community.jsx'
import './assets/styles/global.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Home />}      />
          <Route path="/recipes"   element={<Recipes />}   />
          <Route path="/tips"      element={<Tips />}      />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
