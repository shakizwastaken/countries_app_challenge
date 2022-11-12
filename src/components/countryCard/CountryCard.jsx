import { useNavigate } from "react-router";
import "./countryCard.css";

const CountryCard = ({ country }) => {
  //country data destructuring
  const {
    name: { common },
    flags: { svg },
    population,
    region,
    capital,
  } = country;

  const formatTitle = (title) => {
    return title.length >= 20 ? title.slice(0, 19) + "..." : title;
  };

  //navigate to country page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/name/${common}`);
  };

  return (
    <div className="country-card item shadow" onClick={handleClick}>
      <div className="flag-container">
        <img className="no-select" src={svg} alt={common + "'s flag"} />
      </div>
      <dl className="country-desc">
        <h2>{formatTitle(common)}</h2>
        <dt>
          <b>Population</b>: {population}
        </dt>
        <dt>
          <b>Region</b>: {region}
        </dt>
        <dt>
          <b>Capital</b>: {capital}
        </dt>
      </dl>
    </div>
  );
};

export default CountryCard;
