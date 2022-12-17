import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import { BaseApiValueContext } from "../Context/BaseApiValueContext";

export function Browse() {
  const { searchApi } = React.useContext(BaseApiValueContext);

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  async function fetchData(query, page) {
    try {
      if (query.length > 0) {
        const response = await axios.get(
          `${searchApi}/?api_key=498f0c94da7ca8672cee0f261723823a&query=${query}&page=${
            page > 0 ? page : 1
          }`
        );
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(searchTerm, page).then();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, page]);

  return (
    <div className="content">
      <div className="wrapper">
        <form action="" className="form">
          <input
            type="text"
            name="search"
            id="search"
            className="input"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />

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
        <div className="popular-movies">
          {movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
