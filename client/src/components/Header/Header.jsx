import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('testtoken');
    localStorage.removeItem('testuserid');
    navigate('/login');
  };

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="/home">Home</a>
        <a href="">Properties</a>
        <a href="/create-house">Add Properties</a>
        <a href="#" onClick={handleLogout}>Logout</a>
      </div>
      <div className="menu-toggle" onClick={handleToggle}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default Header;
