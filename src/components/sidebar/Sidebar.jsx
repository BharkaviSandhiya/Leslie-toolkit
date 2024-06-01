import React, { useState, useEffect } from 'react';
import './Sidebar.scss';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const [email, setEmail] = useState('');
  // const [selectedBrand, setSelectedBrand] = useState('');
  const navigate = useNavigate();
  // Handle logout
  const handleLogout = () => {
    // Perform any logout actions here
    // Redirect to the login page
    navigate('/login');
  };
  // Get user email from local storage
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);
  // Get the first letter of the user's email
  const firstLetter = email.charAt(0).toUpperCase();
  // Array of brand options
  const brandOptions = [
    "Valley Pool",
    "Aqua Quip",
    "Oregon Hot Tub",
    "International Hottub",
    "Capital Hot Tub",
    "Pool City",
    "Spring Dance",
    "Splash Pools And Spa",
    "Stellar",
    "Horizon"
  ];
  // Toggle sidebar menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Toggle branch menu
  const toggleBranchMenu = () => {
    setIsBranchOpen(!isBranchOpen);
    document.body.classList.toggle('branch-menu-open');
  };
  // Close sidebar menu
  const closeMenu = () => {
    setIsOpen(false);
    setIsBranchOpen(false);
    document.body.classList.remove('branch-menu-open');
  };
  // Handle brand selection
  const handleBrandSelect = (brand) => {
    // setSelectedBrand(brand);
    navigate(`/${brand.toLowerCase().replace(/\s+/g, '-')}`);
    closeMenu();
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
                <a href="/notifications" className="nav-link">
                  <i className="bx bx-bell icon"></i>
                  <span className="link">Notifications</span>
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
                        <div
                          className="dropdown-link"
                          onClick={() => handleBrandSelect(brand)}
                        >
                          {brand}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
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
        <div className="email-icon">
          {firstLetter}
        </div>
      </nav>
      <section className={`overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></section>
    </>
  );
};
export default Sidebar;