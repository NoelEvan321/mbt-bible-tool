import React from 'react'
// import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home/Index'
import Affiliations from './components/Affiliations/Affiliations'
import BibleSearch from './components/BibleSearch/BibleSearch'
import DiscoveryMethod from './components/Discovery/DiscoveryMethod'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

export default function App() {
  return(
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/affiliations' element={<Affiliations />} />
          <Route path='/bibleSearch' element={<BibleSearch />} />
          <Route path='/discoveryMethod' element={<DiscoveryMethod />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}