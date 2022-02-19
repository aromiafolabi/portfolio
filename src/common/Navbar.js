// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="m-4">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">    
      <div className="container-fluid">
        <a href="#/" className="navbar-brand">Home</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon">
          </span>
        </button>    
        <div className="collapse navbar-collapse" id="navbarCollapse">  
        <div className="navbar-nav">   
          <a href="#about" className="nav-button-dark">About Me</a>       
          <a href="#experience" className="nav-button-dark">Experience</a>
          <a href="#projects" className="nav-button-dark">Projects</a>
          <a href="#contact" className="nav-button-dark">Contact</a>
          </div>  
        </div>  
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
