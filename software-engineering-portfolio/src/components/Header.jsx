import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content" >
        <h1 style={{textShadow:'-6px 6px 8px rgb(208,30,240)', fontSize: '100px', padding: '15px'}}>Bryan Velez</h1>
        {/* <Link to="/" className="nav-logo">
          <img
            src="https://github.com/Bryan-Velez/Portfolio/blob/main/software-engineering-portfolio/src/assets/mushroom.png?raw=true"
            alt="logo"
            style={{ height: "75px" }}
          />
        </Link> */}
        <Link
          to="https://github.com/Bryan-Velez"
          className="nav-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.com/Bryan-Velez/Portfolio/blob/main/software-engineering-portfolio/src/assets/Github%20Icon%202.png?raw=true"
            alt="logo"
            style={{ height: "100px" }}
            className="github-icon"
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
