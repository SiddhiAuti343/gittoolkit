import React, { useState } from 'react';
import './Navbar.css'; 

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container nav">
        <a className="navbar-brand" href="/">
          <div className="logo-container">
            <img src="finallogo.png" alt="Logo" className="logo"/>
            <span className="brand-text">Entrepreneur's Toolkit</span>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav_ul align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blogs</a>
            </li>
            <div>
              <button type="button" className="btn btn-primary mx-2">Login</button>
              <button type="button" className="btn btn-secondary mx-2">Signin</button>
            </div>
            <div className="form-check form-switch ms-5">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
