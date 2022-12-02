import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailPage() {
  const moviesApi = "https://api.themoviedb.org/3/movie";
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  async function fetchData() {
    try {
      const response = await axios.get(
        `${moviesApi}/${id}?api_key=498f0c94da7ca8672cee0f261723823a`
      );
      setMovie(response.data);
      // console.log(response.data.genres);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  return (
    <div className="content">
      {movie && (
        <div className="movie-detail-card">
          <div className="movie-detail-card-img">
            <img
              src={`${imagePath}/${movie.poster_path}`}
              alt=""
              width="200px"
            />
          </div>
          <div className="movie-detail-body">
            <div className="title">{movie.original_title}</div>
            <div className="genres">
              {movie.release_date} |{" "}
              {movie.genres.map((g) => (
                <Link to={`/genre/${g.id}`} key={g.id}>
                  {g.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetailPage;
