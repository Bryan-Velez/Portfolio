import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <h1>Bryan Velez</h1>

      <Link to="/" className="nav-logo">
        <img
          src="https://github.com/Bryan-Velez/Portfolio/blob/main/software-engineering-portfolio/src/assets/mushroom.png?raw=true"
          alt="logo"
          style={{ height: "75px" }}
        />
      </Link>
      <Link to="/" className="nav-logo">
        <img
          src="https://github.com/Bryan-Velez/Portfolio/blob/main/software-engineering-portfolio/src/assets/mushroom.png?raw=true"
          alt="logo"
          style={{ height: "75px" }}
        />
      </Link>

      <Nav />
    </header>
  );
};

export default Header;
