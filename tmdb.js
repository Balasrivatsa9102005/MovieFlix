import axios from "axios";

const API_KEY = "api_key"; 
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async (langCode = "en") => {
  const res = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${langCode}&region=IN&sort_by=popularity.desc`
  );
  return res.data.results;
};

export const searchMovies = async (query, langCode = "en") => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=${langCode}`
  );
  return res.data.results;
};
