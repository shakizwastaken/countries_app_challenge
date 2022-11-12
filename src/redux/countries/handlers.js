import {
  fetchCountries,
  fetchCountries_failed,
  fetchCountries_success,
} from "./actionCreators";

const api = "https://restcountries.com/v3.1/all";

export const handleFetchCountries = () => {
  return function (dispatch) {
    console.log("fetching data...");
    dispatch(fetchCountries());
    fetch(api)
      .then((rep) => rep.json())
      .then((data) => {
        console.log("successfully loaded data.");
        dispatch(fetchCountries_success(data));
      })
      .catch((err) => {
        console.log("failed to load data.");
        console.log(err);
        dispatch(fetchCountries_failed(err));
      });
  };
};
