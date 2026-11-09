
import { useNavigate } from 'react-router-dom'

function CartDrawer({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemove
}) {
  const navigate = useNavigate()

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  if (!isOpen) {
    return null
  }

  function handleCheckout() {
    onClose()
    navigate('/checkout')
  }

  return (
    <aside className="cart-drawer" aria-label="Shopping cart">
      <h2>Your Cart</h2>

      <button type="button" onClick={onClose}>
        Close
      </button>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>

              <button
                type="button"
                disabled={item.quantity <= 1}
                onClick={() => onUpdateQuantity(item.id, -1)}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                type="button"
                disabled={item.quantity >= item.stock}
                onClick={() => onUpdateQuantity(item.id, 1)}
              >
                +
              </button>

              <button
                type="button"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <p>Subtotal: ${subtotal.toFixed(2)}</p>

          <button type="button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </aside>
  )
}

export default CartDrawer
