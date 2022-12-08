import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <div className="header-title">AZILEX CINEMA</div>
      <div className="header-nav">
        <Link to={"/"} className="">
          Main
        </Link>
        <Link to={"/movies"} className="">
          Movies
        </Link>
        <Link to={"/premieres"} className="">
          Premieres
        </Link>
        <Link to={"/browse"} className="">
          Browse
        </Link>
        <Link to={"/about"} className="">
          About Us
        </Link>
      </div>
    </div>
  );
}
