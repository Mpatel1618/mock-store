import { Outlet, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navpadding">
      <nav>
        <a className="logo" href="/">
          Mock Store
        </a>
        <div>
          <ul className="navelements">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
