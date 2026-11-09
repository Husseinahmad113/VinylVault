
import AlbumCard from './AlbumCard.jsx'

function AlbumGrid({ albums, onAddToCart }) {
  return (
    <div className="album-grid">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default AlbumGrid
