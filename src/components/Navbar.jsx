
import { Link } from 'react-router-dom'

function Navbar({ cartCount, onToggleCart }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/" className="navbar-brand">
        VinylVault
      </Link>

      <button
        type="button"
        className="cart-toggle"
        onClick={onToggleCart}
        aria-label={`Shopping cart with ${cartCount} items`}
      >
        Cart ({cartCount})
      </button>
    </nav>
  )
}

export default Navbar
