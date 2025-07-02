import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">🎬 MovieFlix</h1>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/favorites"
          className={location.pathname === "/favorites" ? "active" : ""}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
