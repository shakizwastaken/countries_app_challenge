import countriesReducer from "./countries/countriesReducer";
import darkModeReducer from "./darkMode/darkModeReducer";

const reducer = {
  reducer: { countries: countriesReducer, darkMode: darkModeReducer },
};

export default reducer;
