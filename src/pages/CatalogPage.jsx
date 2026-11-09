
import { useState } from 'react'
import { ALBUMS } from '../data/albums'

import GenreFilterBar from '../components/GenreFilterBar.jsx'
import AlbumGrid from '../components/AlbumGrid.jsx'

function CatalogPage({ onAddToCart }) {
  const [selectedGenre, setSelectedGenre] = useState('All')

  const filteredAlbums = selectedGenre === 'All'
    ? ALBUMS
    : ALBUMS.filter((album) => album.genre === selectedGenre)

  
  return (
    <main className="catalog-page">
      <h1>Explore Vinyl Records</h1>
      <p>Discover records from our independent vinyl collection.</p>

      <GenreFilterBar
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />

      <p>Selected genre: {selectedGenre}</p>
      <p>Albums available: {filteredAlbums.length}</p>
      
<AlbumGrid
  albums={filteredAlbums}
  onAddToCart={onAddToCart}
/>

    </main>
  )

}

export default CatalogPage
