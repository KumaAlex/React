import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import { BaseApiValueContext } from "../Context/BaseApiValueContext";

export function Movies() {
  const { genreApi, discoverApi } = React.useContext(BaseApiValueContext);

  const [movies, setMovies] = useState([]);
  const [genresList, setGenresList] = useState([]);

  const [loading, setLoading] = useState(true);

  const [sortBy, setSortBy] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  async function fetchData(sort_by, genre, page) {
    try {
      const response = await axios.get(
        `${discoverApi}?api_key=498f0c94da7ca8672cee0f261723823a&sort_by=${sortBy}&with_genres=${genre}&page=${
          page > 0 ? page : 1
        }`
      );

      const response2 = await axios.get(
        `${genreApi}?api_key=498f0c94da7ca8672cee0f261723823a`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
      setGenresList(response2.data.genres);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(sortBy, genre, page).then();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, genre, page]);

  const sortByOptions = [
    {
      label: "Popularity ASC",
      value: "popularity.asc",
    },
    {
      label: "Popularity DESC",
      value: "popularity.desc",
    },
    {
      label: "Release Date ASC",
      value: "release_date.asc",
    },
    {
      label: "Release Date DESC",
      value: "release_date.desc",
    },
    {
      label: "Vote Average ASC",
      value: "vote_average.asc",
    },
    {
      label: "Vote Average DESC",
      value: "vote_average.desc",
    },
    {
      label: "Original Title ASC",
      value: "original_title.asc",
    },
    {
      label: "Original Title DESC",
      value: "original_title.desc",
    },
  ];

  return (
    <div className="content">
      <div className="wrapper">
        <form action="" className="form">
          <select
            name="sort"
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
          >
            {sortByOptions.map((s) => (
              <option value={s.value} key={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <select
            name="genres"
            id="genres"
            value={genre}
            onChange={handleGenreChange}
          >
            {genresList.map((g) => (
              <option value={g.id} key={g.id}>
                {g.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="page"
            id="page"
            className="input"
            placeholder={`Page from 1 to ${totalPages}`}
            value={page}
            onChange={handlePageChange}
          />
        </form>
        {loading && <h2>Loading...</h2>}
        <div className="popular-movies">
          {movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
