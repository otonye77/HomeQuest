import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <span>Company Name</span>
      </div>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="">Properties</a>
        <a href="/create-house">Add Properties</a>
      </div>
    </div>
  );
};

export default Header;
