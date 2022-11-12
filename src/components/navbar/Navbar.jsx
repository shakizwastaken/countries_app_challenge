import "./navbar.css";

import DarkModeToggler from "../darkModeToggler/DarkModeToggler";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //navigate to home page on click
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <nav className="item shadow">
      <div className="nav-container">
        <h1 className="no-select" onClick={navigateToHome}>
          Where in the world?
        </h1>

        <DarkModeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
