import { useSelector } from "react-redux";

import CountryCard from "../countryCard/CountryCard";

import "./cardsContainer.css";

const CardsContainer = () => {
  const { fetching, displayedCountries } = useSelector(
    (state) => state.countries
  );

  const loading = () => {
    return <h1>loading...</h1>;
  };

  const renderCards = () => {
    return displayedCountries.length !== 0 ? (
      displayedCountries
        .filter((country) => country.name.common !== "Israel") //not a country :D.
        .map((country, i) => <CountryCard key={i} country={country} />)
    ) : (
      <h1>No countries to display !</h1>
    );
  };
  return (
    <div className="cards-container">
      {fetching ? loading() : renderCards()}
    </div>
  );
};

export default CardsContainer;
