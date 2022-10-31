import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <div className="nav-bar">
          <Link to={"/"}><button className="nav-component">Main</button></Link>
          <Link to={"/movies"}><button className="nav-component" >Movies</button></Link>
          <Link to={"/premieres"}><button className="nav-component" >Premieres</button></Link>
          <Link to={"/browse"}><button className="nav-component" >Browse</button></Link>
          <Link to={"/about"}><button className="nav-component">About Us</button></Link>
          <Link to={"/profile"}><button className="nav-component">Profile</button></Link>
        </div>
    )
}