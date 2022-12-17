import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailPage() {
  const moviesApi = "https://api.themoviedb.org/3/movie";
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  async function fetchData() {
    try {
      const response = await axios.get(
        `${moviesApi}/${id}?api_key=498f0c94da7ca8672cee0f261723823a`
      );
      setMovie(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData().then();
  });

  return (
    <div className="content">
      {error && <h2>{error}</h2>}
      {loading && <h2>Loading...</h2>}
      {movie && (
        <div className="movie-detail-card">
          <div className="movie-detail-card-img">
            <img
              src={`${
                movie.poster_path !== null
                  ? `${imagePath}/${movie.poster_path}`
                  : "../default-movie.jpg"
              }`}
              alt="Logo"
            />
          </div>
          <div className="movie-detail-body">
            <div className="row">
              <div className="row-title">Title</div>
              <div className="row-value">{movie.title}</div>
            </div>
            <div className="row">
              <div className="row-title">Release Date</div>
              <div className="row-value">{movie.release_date}</div>
            </div>
            <div className="row">
              <div className="row-title">Country</div>
              <div className="row-value">
                {movie.production_countries.map((c) => (
                  <p key={c.name}>{c.name}</p>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="row-title">Genres</div>
              <div className="row-value">
                {movie.genres.map((g, index) => (
                  <p to={`/genre/${g.id}`} key={g.id}>
                    {g.name} {index < movie.genres.length - 1 ? "," : ""}
                  </p>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="row-title">Time</div>
              <div className="row-value">{movie.runtime} min</div>
            </div>
            <div className="row">
              <div className="row-title">Revenue</div>
              <div className="row-value">{movie.revenue}$ USD</div>
            </div>
            <div className="row">
              <div className="row-title">Tagline</div>
              <div className="row-value">{movie.tagline}</div>
            </div>
            {/*<div className="row">*/}
            {/*  <div className="row-title">Overview</div>*/}
            {/*  <div className="row-value">{movie.overview}</div>*/}
            {/*</div>*/}
            <div className="row">
              <div className="row-title">Status</div>
              <div className="row-value">{movie.status}</div>
            </div>
            <div className="row">
              <div className="row-title">Rating</div>
              <div className="row-value">{movie.vote_average} out of 10</div>
            </div>
          </div>
          <div className="movie-detail-overview">"{movie.overview}"</div>
        </div>
      )}
    </div>
  );
}

export default MovieDetailPage;
