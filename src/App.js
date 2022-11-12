import "./app.css";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { handleFetchCountries } from "./redux/countries/handlers";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import CardsContainer from "./components/cardsContainer/CardsContainer";
import Navbar from "./components/navbar/Navbar";
import FiltersSection from "./components/filtersSection/FiltersSection";
import CountryPage from "./components/countryPage/CountryPage";

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    dispatch(handleFetchCountries());
  }, []);

  return (
    <BrowserRouter>
      <div className="app" id={isDarkMode ? "dark" : "light"}>
        <div className="app-wrapper">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  <FiltersSection />
                  <CardsContainer />
                </div>
              }
            />
            <Route path="/name/:name" element={<CountryPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
