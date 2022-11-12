import { useDispatch } from "react-redux";
import { filterDisplayedCountries } from "../../redux/countries/actionCreators";
import "./filterMenuDropItem.css";

const FilterMenuDropItem = ({ content, setOpen, setValue }) => {
  const dispatch = useDispatch();

  const filterByRegion = () => {
    return function (countries) {
      console.log(countries[0]);
      return countries.filter(({ region }) => region.includes(content));
    };
  };

  const handleClick = () => {
    dispatch(filterDisplayedCountries(filterByRegion(content)));
    setValue(content);
    setOpen(false);
  };

  return (
    <div className="filter-menu-dropItem no-select" onClick={handleClick}>
      {content}
    </div>
  );
};

export default FilterMenuDropItem;
