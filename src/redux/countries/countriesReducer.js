import {
  CLEAR_DISPLAY_FILTERS,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILED,
  FETCH_COUNTRIES_SUECCESS,
  FILTER_DISPLAYED_COUNTRIES,
} from "./constants";

const defualtState = {
  fetching: false,
  countries: [],
  displayedCountries: [],
  err: "",
};

const countriesReducer = (state = defualtState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        fetching: true,
        countries: [],
        err: "",
      };
    case FETCH_COUNTRIES_SUECCESS:
      return {
        ...state,
        fetching: false,
        countries: action.payload,
        displayedCountries: action.payload,
        err: "",
      };
    case FETCH_COUNTRIES_FAILED:
      return {
        ...state,
        fetching: false,
        countries: [],
        err: action.payload,
      };

    case CLEAR_DISPLAY_FILTERS:
      return {
        ...state,
        displayedCountries: state.countries,
      };
    case FILTER_DISPLAYED_COUNTRIES:
      return {
        ...state,
        displayedCountries: action.payload(state.countries),
      };
    default:
      return state;
  }
};

export default countriesReducer;
