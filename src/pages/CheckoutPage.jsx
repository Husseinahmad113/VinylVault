
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CheckoutPage({ cart, onClearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  })

  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!event.currentTarget.checkValidity() || cart.length === 0) {
      return
    }

    setOrderConfirmed(true)
    onClearCart()
  }

  if (orderConfirmed) {
    return (
      <main className="checkout-page">
        <h1>Order Confirmed!</h1>
        <p>Thank you for your order, {formData.name}!</p>
        <p>Your vinyl records are on their way.</p>
        <Link to="/">Back to Catalog</Link>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/">Continue Shopping</Link>
        </>
      ) : (
        <>
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div key={item.id}>
              <p>
                {item.title} × {item.quantity} —
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <h3>Total: ${subtotal.toFixed(2)}</h3>

          <h2>Shipping Information</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="address">Street Address</label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="zip">ZIP Code</label>
            <input
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              pattern="[0-9]{5}"
              title="Enter a 5-digit ZIP code"
              required
            />

            <button type="submit">Place Order</button>
          </form>
        </>
      )}
    </main>
  )
}

export default CheckoutPage
