function MovieCard({ movie, onFavoriteClick, isFavoritePage }) {
  const addToFavorites = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = stored.find((m) => m.id === movie.id);
    if (!exists) {
      stored.push(movie);
      localStorage.setItem("favorites", JSON.stringify(stored));
      if (onFavoriteClick) onFavoriteClick();
    }
  };

  const removeFromFavorites = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const updated = stored.filter((m) => m.id !== movie.id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    if (onFavoriteClick) onFavoriteClick();
  };

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average}</p>
        {isFavoritePage ? (
          <button onClick={removeFromFavorites}>❌ Remove</button>
        ) : (
          <button onClick={addToFavorites}>❤️ Add to Favorites</button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
