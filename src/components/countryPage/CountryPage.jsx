import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BorderBtn from "../borderCountryBttn/BorderBtn";

import "./countryPage.css";

const CountryPage = () => {
  const { name } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const fetchCountry = async () => {
    setLoading(true);
    let rep = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    ).then((reps) => reps.json());

    setData(rep[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  //data formatting functions...
  const getNativeName = (nativeNames) => {
    return Object.values(...Object.values(nativeNames))[0];
  };

  const getStrFromObjKeys = (obj) => {
    return Object.keys(obj);
  };

  const getStrFromObjValues = (obj) => {
    return Object.values(obj);
  };

  //data rendering functions

  const renderStats = (stats) => {
    return stats.map(({ title, value }) => (
      <div className="country-page-stats-item">
        <strong>{title}: </strong> {value}
      </div>
    ));
  };

  const renderBorderCountries = (borders) => {
    return borders.map((border) => <BorderBtn name={border} />);
  };

  //main data render function
  const renderData = () => {
    //data destructuring
    const {
      name: { official: officialName, nativeName: nativeNames },
      population,
      region,
      subregion,
      tld,
      currencies,
      languages,
      capital,
      flags: { svg },
      borders,
    } = data;

    return (
      <>
        <img className="flag" src={svg} alt={`${officialName}'s flag`} />

        <div className="country-page-info">
          <h1>{officialName}</h1>
          <div className="country-page-stats">
            {renderStats([
              { title: "Native Name", value: getNativeName(nativeNames) },
              { title: "Population", value: population },
              { title: "Region", value: region },
              { title: "Sub Region", value: subregion },
              { title: "Top Level Domain", value: tld },
              {
                title: "Currencies",
                value: getStrFromObjKeys(currencies),
              },
              {
                title: "Languages",
                value: getStrFromObjValues(languages),
              },
              { title: "Capital", value: capital[0] },
            ])}
          </div>
          <div className="border-countries">
            {renderBorderCountries(borders)}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="country-page-section">
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="country-page-wrapper">{renderData()}</div>
      )}
    </div>
  );
};

export default CountryPage;
