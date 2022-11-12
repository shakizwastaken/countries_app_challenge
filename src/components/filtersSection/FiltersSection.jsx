import { useDispatch } from "react-redux";
import FilterMenu from "../filterMenu/FilterMenu";
import Searchbar from "../searchbar/Searchbar";
import "./filtersSection.css";

const FiltersSection = () => {
  return (
    <div className="filters-section">
      <Searchbar />
      <FilterMenu />
    </div>
  );
};

export default FiltersSection;
