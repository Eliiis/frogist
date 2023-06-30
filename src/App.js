import React from 'react'
import './App.css'
import './styles/text.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderPage } from './pages/header'
import Homepage from './pages/home'
import Aboutuspage from './pages/aboutus'
import Aboutcofepage from './pages/cofe'
import HowDrinkPage from './pages/howdrink'
import Menu from './pages/menu'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/menu'} element={<Menu />} />
          <Route path={'/aboutus'} element={<Aboutuspage />} />
          <Route path={'/cofe'} element={<Aboutcofepage />} />
          <Route path={'/howdrink'} element={<HowDrinkPage />} />
        </Routes>
        {/* <footer>123</footer> */}
        
        
      </BrowserRouter>
    </div>
  )
}

export default App
