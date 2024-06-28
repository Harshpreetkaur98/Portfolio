import React from 'react';
import './NavBar.css';
import logo from '../Images-Netflix/HARSHPREET-logo.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#">
            <img className="harshpreet-logo" src={logo} alt="Netflix Logo" />
          </a>
        </div>
        <nav className="nav-links">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Certifications</a></li>
          </ul>
        </nav>
        <div className="profile">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile Icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
