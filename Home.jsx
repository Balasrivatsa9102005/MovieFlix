import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";


const languageMap = {
  Hindi: "hi",
  Telugu: "te",
  Tamil: "ta",
  Malayalam: "ml",
  Kannada: "kn",
};

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("en");


  useEffect(() => {
    if (search.trim() === "") {
      getPopularMovies(language).then(setMovies);
    } else {
      searchMovies(search, language).then(setMovies);
    }
  }, [search, language]);


  const handleLanguageChange = (langKey) => {
    setLanguage(languageMap[langKey]);
  };

  return (
    <div className="home-container">
      <div className="controls">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="lang-buttons">
          {Object.keys(languageMap).map((lang) => (
            <button
              key={lang}
              className={`lang-btn ${
                languageMap[lang] === language ? "active" : ""
              }`}
              onClick={() => handleLanguageChange(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div className="movie-grid">
        {movies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
