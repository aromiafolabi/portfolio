// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <button className="about-button"><a href="/" className="nav-button-dark">Home Page</a></button>
      <button className="about-button"><a href="/about" className="nav-button-dark">About Me</a></button>
      <button className="about-button"><a href="/experience" className="nav-button-dark">Experience</a></button>
      <button className="about-button"><a href="/projects" className="nav-button-dark">Projects</a></button>
      <button className="about-button"><a href="/contact" className="nav-button-dark">Contact</a></button>
    </nav>
  );
}

export default Navbar;
