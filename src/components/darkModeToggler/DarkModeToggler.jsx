import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/darkMode/actionCreators";
import "./darkModeToggler.css";

const DarkModeToggler = () => {
  const isDarkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="darkMode-toggler-wrapper no-select" onClick={handleClick}>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      <h4>{isDarkMode ? "Light mode" : "Dark mode"}</h4>
    </div>
  );
};

export default DarkModeToggler;
