import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <span>Company Name</span>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/properties">Properties</a>
        <a>Add Properties</a>
      </div>
    </div>
  );
};

export default Header;
