import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../assets/images/Logo.png";

function Header({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src={Logo} alt="Communion Icon" width="180" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          
          <div 
            className="dropdown"
            onMouseEnter={() => setHoveredItem("events")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button className="dropdown-btn">
              Events
              <svg
                className="dropdown-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`dropdown-menu ${hoveredItem === "events" ? "active" : ""}`}>
              <Link to="/events?filter=upcoming" className="dropdown-item">
                Upcoming
              </Link>
              <Link to="/events?filter=past" className="dropdown-item">
                Past Events
              </Link>
              <Link to="/events?action=create" className="dropdown-item">
                Create Event
              </Link>
            </div>
          </div>

          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>

        <div className="header-right">
          {/* Fixed theme toggle - added onClick handler and dynamic icon */}
          
          
          <Link to="/signin" className="sign-in-btn desktop-only">
            Sign in
          </Link>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"></path>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <nav className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Home
          </Link>
          
          <div className="mobile-dropdown">
            <button 
              className="mobile-dropdown-btn"
              onClick={() => setHoveredItem(hoveredItem === "mobile-events" ? null : "mobile-events")}
            >
              Events
              <svg
                className={`mobile-dropdown-icon ${hoveredItem === "mobile-events" ? "rotated" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            <div className={`mobile-dropdown-menu ${hoveredItem === "mobile-events" ? "active" : ""}`}>
              <Link to="/events?filter=upcoming" className="mobile-dropdown-item" onClick={toggleMobileMenu}>
                Upcoming
              </Link>
              <Link to="/events?filter=past" className="mobile-dropdown-item" onClick={toggleMobileMenu}>
                Past Events
              </Link>
              <Link to="/events?action=create" className="mobile-dropdown-item" onClick={toggleMobileMenu}>
                Create Event
              </Link>
            </div>
          </div>
          
          <Link to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>
            About
          </Link>
          
          <div className="mobile-nav-bottom">
            <Link to="/signin" className="mobile-sign-in-btn" onClick={toggleMobileMenu}>
              Sign in
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;