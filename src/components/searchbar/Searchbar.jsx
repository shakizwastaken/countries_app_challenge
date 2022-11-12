import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearFilters,
  filterDisplayedCountries,
} from "../../redux/countries/actionCreators";
import "./searchbar.css";

const Searchbar = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const getRelevancy = (country, input) => {
    input = input.trim().toLocaleLowerCase();
    const names = Object.values(country.name)
      .splice(0, 2)
      .map((value) => value.trim().toLocaleLowerCase());

    let relevancy = 0;

    names.forEach((name) => {
      if (name === input) {
        relevancy = 3;
        return;
      }
      if (name.includes(input)) {
        relevancy = 2;
        return;
      }
    });
    return relevancy;
  };

  const filterBySearch = (value) => {
    return function (countries) {
      return countries
        .filter((country) => getRelevancy(country, value) !== 0)
        .sort((a, b) => getRelevancy(b, value) - getRelevancy(a, value));
    };
  };

  const handleSearch = (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);

    if (currentValue.trim()) {
      dispatch(filterDisplayedCountries(filterBySearch(currentValue)));
    } else {
      dispatch(clearFilters());
    }
  };

  return (
    <div className="searchbar item shadow">
      <FontAwesomeIcon icon={faSearch} />
      <input
        className="item"
        value={value}
        onChange={handleSearch}
        placeholder="Where in the world ?"
      />
    </div>
  );
};

export default Searchbar;
