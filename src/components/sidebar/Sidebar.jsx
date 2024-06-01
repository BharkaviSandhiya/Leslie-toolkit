import React, { useState } from 'react';
import './Sidebar.scss';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout actions here
    // Redirect to the login page
    navigate('/login');
  };

  const brandOptions = [
    "VALLEY POOL",
    "AQUA QUIP",
    "OREGON HOT TUB",
    "INTERNATIONAL HOTTUB",
    "CAPITAL HOT TUB",
    "POOL CITY",
    "SPRING DANCE",
    "SPLASH POOLS AND SPA",
    "STELLAR",
    "HORIZON"
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleBranchMenu = () => {
    setIsBranchOpen(!isBranchOpen);
    document.body.classList.toggle('branch-menu-open');
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsBranchOpen(false);
    document.body.classList.remove('branch-menu-open');
  };

  return (
    <>
      <nav className={isOpen ? 'open' : ''}>
        <div className="sidebar">
          <div className="logo">
            <i className="bx bx-menu menu-icon" onClick={toggleMenu}></i>
            <span className="logo-name">Leslie's Toolkit</span>
          </div>
          <div className="sidebar-content">
            <ul className="lists">
              <li className="list">
                <a href="/dashboard" className="nav-link">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="link">Dashboard</span>
                </a>
              </li>
              <li className="list">
                <div className="nav-link" onClick={toggleBranchMenu}>
                  <i className="bx bx-building icon"></i>
                  <span className="link">Brands</span>
                  <i className={`bx ${isBranchOpen ? 'bx-chevron-up' : 'bx-chevron-down'} arrow`}></i>
                </div>
                {isBranchOpen && (
                  <ul className="dropdown">
                    {brandOptions.map((brand, index) => (
                      <li key={index}>
                        <a href={`/${brand.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-link">{brand}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="list">
                <a href="/files" className="nav-link">
                  <i className="bx bx-folder-open icon"></i>
                  <span className="link">Files</span>
                </a>
              </li>
            </ul>
            <div className="bottom-content">
              <li className="list">
                <div className="nav-link" onClick={handleLogout}>
                  <i className="bx bx-log-out icon"></i>
                  <span className="link">Logout</span>
                </div>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <section className={`overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></section>
    </>
  );
};

export default Sidebar;
