import {Link} from "react-router-dom";

export function Navigation() {

  function windowLocation() {
    window.location.assign("#navPart")
  }
    return (
        <div className="nav-bar" id = "navPart">
          <div><Link to={"/"}><button className="nav-component" onClick={windowLocation}>Main</button></Link></div>
          <div><Link to={"/movies"}><button className="nav-component" onClick={windowLocation}>Movies</button></Link></div>
          <div><Link to={"/premieres"}><button className="nav-component" onClick={windowLocation}>Premieres</button></Link></div>
          <div><Link to={"/browse"}><button className="nav-component" onClick={windowLocation}>Browse</button></Link></div>
          <div><Link to={"/about"}><button className="nav-component" onClick={windowLocation}>About Us</button></Link></div>
          <div><Link to={"/profile"}><button className="nav-component" onClick={windowLocation}>Profile</button></Link></div>
        </div>
    )
}