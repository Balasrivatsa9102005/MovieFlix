import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="home-container">
      <h2>Your Favorite Movies</h2>
      <div className="movie-grid">
        {favorites.length === 0 ? (
          <p>No favorites added yet 😢</p>
        ) : (
          favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onFavoriteClick={loadFavorites}
              isFavoritePage={true}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
