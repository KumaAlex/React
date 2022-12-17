import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import axios from "axios";
import { BaseApiValueContext } from "../Context/BaseApiValueContext";

export function Main() {
  const { movieApi } = React.useContext(BaseApiValueContext);
  const [popularMovies, setPopularMovies] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${movieApi}/popular?api_key=498f0c94da7ca8672cee0f261723823a`
      );
      setPopularMovies(response.data.results.slice(0, 5));
      // console.log(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData().then();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="content">
      <div className="intro-text">
        <div className="intro-text-title">Welcome!</div>
        <div className="intro-text-body">
          Millions of movies, and TV shows. Explore now.
        </div>
      </div>
      <h3 className="">Popular</h3>
      <div className="popular-movies">
        {popularMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
