import {
  CLEAR_DISPLAY_FILTERS,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILED,
  FETCH_COUNTRIES_SUECCESS,
  FILTER_DISPLAYED_COUNTRIES,
} from "./constants";

export const fetchCountries = () => {
  return {
    type: FETCH_COUNTRIES,
  };
};

export const fetchCountries_success = (data) => {
  return {
    type: FETCH_COUNTRIES_SUECCESS,
    payload: data,
  };
};

export const fetchCountries_failed = (err) => {
  return {
    type: FETCH_COUNTRIES_FAILED,
    payload: err,
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_DISPLAY_FILTERS,
  };
};

export const filterDisplayedCountries = (filterFunction) => {
  return {
    type: FILTER_DISPLAYED_COUNTRIES,
    payload: filterFunction,
  };
};
