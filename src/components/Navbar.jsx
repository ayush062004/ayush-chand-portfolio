import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: location.pathname === path ? "#00f7ff" : "white",
    fontWeight: "500",
  });

  return (
    <nav className="navbar">
      {/* Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" style={linkStyle("/")} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" style={linkStyle("/about")} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/projects" style={linkStyle("/projects")} onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/contact" style={linkStyle("/contact")} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;

