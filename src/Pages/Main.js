import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import axios from "axios";

export function Main() {
  const moviesApi = "https://api.themoviedb.org/3/movie";
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${moviesApi}/popular?api_key=498f0c94da7ca8672cee0f261723823a`
      );
      setPopularMovies(response.data.results);
      // console.log(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);
  return (
    <div className="content">
      <div className="intro-text">
        <div className="intro-text-title">Welcome!</div>
        <div className="intro-text-body">
          Millions of movies, and TV shows. Explore now.
        </div>
      </div>
      <div className="search">Search here</div>
      <div className="">Popular movies</div>
      <div className="popular-movies">
        {popularMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
