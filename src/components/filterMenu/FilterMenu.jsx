import { faX, faXmark, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../redux/countries/actionCreators";
import FilterMenuDropItem from "../filterMenuDropItem/FilterMenuDropItem";
import "./filterMenu.css";

const FilterMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const toggleOpen = (e) => {
    setOpen(!isOpen);
    e.stopPropagation();
  };

  const handleClear = () => {
    setValue("");
    dispatch(clearFilters());
  };

  const dropItems = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const dropMenu = () => {
    return (
      <div className="filter-menu-dropdown item shadow no-select">
        {dropItems.map((content, index) => (
          <FilterMenuDropItem
            key={index}
            content={content}
            setOpen={setOpen}
            setValue={setValue}
          />
        ))}
      </div>
    );
  };

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", close);

    document.addEventListener("scroll", close);

    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("scroll", close);
    };
  }, []);

  return (
    <div className="filter-menu-wrapper">
      <div className="filter-menu no-select item shadow" onClick={toggleOpen}>
        {value && !isOpen ? value : "Filter By Region"}
      </div>

      {value && (
        <span className="no-select" onClick={handleClear}>
          <FontAwesomeIcon icon={faXmarkCircle} />
        </span>
      )}

      {isOpen && dropMenu()}
    </div>
  );
};

export default FilterMenu;
