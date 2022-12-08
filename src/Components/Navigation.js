import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="nav-bar" id="navPart">
      <p className="nav-title">&#8592;</p>
      <Link to={"/"} className="nav-component">
        Main
      </Link>
      <Link to={"/movies"} className="nav-component">
        Movies
      </Link>
      <Link to={"/premieres"} className="nav-component">
        Premieres
      </Link>
      <Link to={"/browse"} className="nav-component">
        Browse
      </Link>
      <Link to={"/about"} className="nav-component">
        About Us
      </Link>
      {/*<Link to={"/profile"} className="nav-component">Profile</Link>*/}
    </div>
  );
}
