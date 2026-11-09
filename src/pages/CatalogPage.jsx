
import { useState } from 'react'
import { ALBUMS } from '../data/albums'

function CatalogPage({ onAddToCart }) {
  const [selectedGenre, setSelectedGenre] = useState('All')

  const filteredAlbums = selectedGenre === 'All'
    ? ALBUMS
    : ALBUMS.filter((album) => album.genre === selectedGenre)

  return (
    <main className="catalog-page">
      <h1>Explore Vinyl Records</h1>
      <p>Discover records from our independent vinyl collection.</p>

      <p>Selected genre: {selectedGenre}</p>
      <p>Albums available: {filteredAlbums.length}</p>
    </main>
  )
}

export default CatalogPage
