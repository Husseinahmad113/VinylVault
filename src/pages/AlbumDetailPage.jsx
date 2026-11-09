
import { Link, useParams } from 'react-router-dom'
import { ALBUMS } from '../data/albums'

function AlbumDetailPage({ onAddToCart }) {
  const { albumId } = useParams()
  const album = ALBUMS.find((item) => item.id === albumId)

  if (!album) {
    return (
      <main className="album-detail-page">
        <h1>Album Not Found</h1>
        <Link to="/">Back to Catalog</Link>
      </main>
    )
  }

  return (
    <main className="album-detail-page">
      <Link to="/">← Back to Catalog</Link>

      <h1>{album.title}</h1>
      <img
        src={album.image}
        alt={`${album.title} album cover`}
      />

      <h2>{album.artist}</h2>
      <p>Genre: {album.genre}</p>
      <p>{album.description}</p>
      <p>Price: ${album.price.toFixed(2)}</p>
      <p>In Stock: {album.stock}</p>

      <h3>Specifications</h3>
      <ul>
        <li>Catalog Number: {album.specs.catalogNumber}</li>
        <li>Weight: {album.specs.weight}</li>
        <li>Speed: {album.specs.speed}</li>
        <li>Label: {album.specs.label}</li>
      </ul>

      <h3>Tracklist</h3>
      <ol>
        {album.tracklist.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ol>

      <button
        type="button"
        disabled={album.stock === 0}
        onClick={() => onAddToCart(album)}
      >
        {album.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </main>
  )
}

export default AlbumDetailPage
