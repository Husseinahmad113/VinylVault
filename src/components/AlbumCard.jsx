
import { Link } from 'react-router-dom'

function AlbumCard({ album, onAddToCart }) {
  return (
    <article className="album-card">
      <Link to={`/album/${album.id}`}>
        <img src={album.image} alt={`${album.title} album cover`} />
        <h2>{album.title}</h2>
      </Link>

      <p>{album.artist}</p>
      <p>{album.genre}</p>
      <p>${album.price.toFixed(2)}</p>

      <button
        type="button"
        disabled={album.stock === 0}
        onClick={() => onAddToCart(album)}
      >
        {album.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </article>
  )
}

export default AlbumCard
