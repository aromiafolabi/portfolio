// import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'
import React from 'react';

function Navbar() {

  const [sideBarShow, setSideBarShow] = React.useState(false)
  const handleSideBar = () => setSideBarShow(!sideBarShow)
  return (
    // <section className="navigation fixed-top">
    // <nav className="navbar navbar-expand-lg navbar-dark">    
    //   <div className="container-fluid">
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation">
    //       <span className="navbar-toggler-icon">
    //       </span>
    //     </button>    
    //     <div className="collapse navbar-collapse text-center" id="navigation">  
    //     <ul className="navbar-nav"> 
    //       <li className="nav-item">
    //         <a href="/" className="nav-link">Home</a> 
    //       </li>
    //       <li className="nav-item">
    //         <a href="#aboutme" className="nav-link">About Me</a> 
    //       </li> 
    //       <li className="nav-item">
    //         <a href="#skills" className="nav-link">Skills</a>  
    //       </li>  
    //         <li className="nav-item">
    //           <a href="#experience" className="nav-link">Experience</a>
    //         </li> 
    //         <li className="nav-item">
    //           <a href="#projects" className="nav-link">Projects</a>
    //         </li> 
    //         <li className="nav-item">
    //           <a href="#contact" className="nav-link">Contact</a>
    //         </li> 
    //     </ul>  
    //     </div>  
    //   </div>
    // </nav>
    // </section>
    <>

      <nav className="nav nav-toggle fixed-top">
        <div className="nav-buttons">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#aboutme" className="nav-link">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="nav burger-toggle fixed-top">
        <div className="burger-icon" onClick={handleSideBar}>
          <Hamburger toggled={sideBarShow} toggle={setSideBarShow} />
        </div>
        <div className={
          sideBarShow
          ? 'side-nav-menu-container active'
          : 'side-nav-menu-container'
        }>
          <div onClick={handleSideBar}>
            <div className="nav-buttons">
            <ul>
            <li className="burger-item">
              <a href="/" className="burger-link">Home</a>
            </li>
            <li className="burger-item">
              <a href="#aboutme" className="burger-link">About Me</a>
            </li>
            <li className="burger-item">
              <a href="#skills" className="burger-link">Skills</a>
            </li>
            <li className="burger-item">
              <a href="#experience" className="burger-link">Experience</a>
            </li>
            <li className="burger-item">
              <a href="#projects" className="burger-link">Projects</a>
            </li>
            <li className="burger-item">
              <a href="#contact" className="burger-link">Contact</a>
            </li>
          </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}

export default Navbar;
