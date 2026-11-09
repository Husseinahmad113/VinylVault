
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import CatalogPage from './pages/CatalogPage.jsx'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/album/:albumId" element={<h1>Album Details</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>
    </div>
  )
}

export default App
