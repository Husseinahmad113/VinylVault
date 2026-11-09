
const genres = ['All', 'Jazz', 'Electronic', 'Rock', 'Classical']

function GenreFilterBar({ selectedGenre, onGenreChange }) {
  return (
    <div className="genre-filter-bar" aria-label="Filter albums by genre">
      {genres.map((genre) => (
        <button
          key={genre}
          type="button"
          className={selectedGenre === genre ? 'active' : ''}
          aria-pressed={selectedGenre === genre}
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}

export default GenreFilterBar
