import {Link} from "react-router-dom";

export function Navigation() {

  function windowLocation() {
    window.location.assign("#navPart")
  }
    return (
        <div className="nav-bar" id = "navPart">
          <Link to={"/"}><button className="nav-component" onClick={windowLocation}>Main</button></Link>
          <Link to={"/movies"}><button className="nav-component" onClick={windowLocation}>Movies</button></Link>
          <Link to={"/premieres"}><button className="nav-component" onClick={windowLocation}>Premieres</button></Link>
          <Link to={"/browse"}><button className="nav-component" onClick={windowLocation}>Browse</button></Link>
          <Link to={"/about"}><button className="nav-component" onClick={windowLocation}>About Us</button></Link>
          <Link to={"/profile"}><button className="nav-component" onClick={windowLocation}>Profile</button></Link>
        </div>
    )
}