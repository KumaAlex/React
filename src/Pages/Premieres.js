import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import { BaseApiValueContext } from "../Context/BaseApiValueContext";

export function Premieres() {
  const { movieApi } = React.useContext(BaseApiValueContext);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${movieApi}/now_playing?api_key=498f0c94da7ca8672cee0f261723823a`
      );
      setUpcomingMovies(response.data.results);
      setLoading(false);
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
      <div className="content-wrapper">
        <h3>Now Playing</h3>
        {loading && <h2>Loading...</h2>}
        {upcomingMovies && (
          <div className="popular-movies">
            {upcomingMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
