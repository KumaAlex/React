import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";

export function Browse() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const searchApi = "https://api.themoviedb.org/3/search/movie";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  async function fetchData(query) {
    try {
      const response = await axios.get(
        `${searchApi}/?api_key=498f0c94da7ca8672cee0f261723823a&query=${query}`
      );
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(searchTerm).then();
  }, [searchTerm]);

  const currentRecords = movies.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(movies.length / recordsPerPage);

  return (
    <div className="content">
      <div className="search-wrapper">
        <form action="" className="form">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <div className="popular-movies">
          {currentRecords.map((m) => (
            <MovieCard movie={m} key={m.id} />
          ))}
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
