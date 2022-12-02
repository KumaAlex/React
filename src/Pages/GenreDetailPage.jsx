import React from "react";
import { useParams } from "react-router-dom";

function GenreDetailPage(props) {
  const { id } = useParams();
  return <div className="content">{id}</div>;
}

export default GenreDetailPage;