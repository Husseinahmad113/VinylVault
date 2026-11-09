
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import CatalogPage from './pages/CatalogPage.jsx'
import Navbar from './components/Navbar.jsx'

import CartDrawer from './components/CartDrawer.jsx'


function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  function addToCart(album) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === album.id)

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === album.id
            ? { ...item, quantity: Math.min(item.quantity + 1, album.stock) }
            : item
        )
      }

      if (album.stock <= 0) {
        return currentCart
      }

      return [...currentCart, { ...album, quantity: 1 }]
    })
  }
  
  function updateQuantity(id, change) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                1,
                Math.min(item.quantity + change, item.stock)
              )
            }
          : item
      )
    )
  }

  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    )
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )



  return (
    <div className="app">
      
<Navbar
  cartCount={cartCount}
  onToggleCart={() => setIsCartOpen((open) => !open)}
/>

      <Routes>
        
<Route path="/" element={<CatalogPage onAddToCart={addToCart} />} />

        <Route path="/album/:albumId" element={<h1>Album Details</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>
    
    
      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
</div>
  )
}

export default App
