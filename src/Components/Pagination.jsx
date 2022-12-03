import React from "react";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="pag">
      <ul className="pag-ul">
        <li className="pag-li">
          <a className="pag-a" href="#" onClick={prevPage}>
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            className={`pag-li ${currentPage === pgNumber ? "active" : ""}`}
            key={pgNumber}
          >
            <a
              className="pag-a"
              href="#"
              onClick={() => setCurrentPage(pgNumber)}
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="pag-li">
          <a className="pag-a" href="#" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
