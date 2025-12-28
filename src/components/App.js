import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import Header from "./Header";
import Footer from "./Footer";

import "../styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false
  });

  const toDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
      }`;
    return date;
  };
  const [errorMsg, setErrorMsg] = useState("");

  const search = async (event) => {
    event.preventDefault();
    if (event.type === "click" || (event.type === "keypress" && event.key === "Enter")) {
      if (!query) {
        setErrorMsg("Please fill the city name");
        return;
      }
      setErrorMsg("");
      setWeather({ ...weather, loading: true, error: false });
      const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
      const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;
      await fetchWeatherData(url);
      setQuery("");
    }
  };

  const searchByLocation = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setWeather({ ...weather, loading: true, error: false });
    navigator.geolocation.getCurrentPosition((position) => {
      const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;
      const url = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}`;
      fetchWeatherData(url);
      setQuery("");
    });
  };

  const fetchWeatherData = async (url) => {
    await axios
      .get(url)
      .then((res) => {
        if (res.data.status === "not_found") {
          setWeather({ data: {}, loading: false, error: true });
        } else {
          setWeather({ data: res.data, loading: false, error: false });
        }
        setErrorMsg("");
      })
      .catch((error) => {
        setWeather({ data: {}, loading: false, error: true });
        setErrorMsg("");
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
      const url = `https://api.shecodes.io/weather/v1/current?query=Agra&key=${apiKey}`;
      fetchWeatherData(url);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* SearchEngine component */}
      <SearchEngine query={query} setQuery={setQuery} search={search} searchByLocation={searchByLocation} />

      {errorMsg && (
        <div className="validation-error">
          {errorMsg}
        </div>
      )}

      {weather.loading && (
        <div className="loader">
          <h4>Searching..</h4>
        </div>
      )}

      {weather.error && (
        <div className="error-card">
          <i className="fas fa-exclamation-circle"></i>
          <p>City Not Found. Please Try with Another City</p>
        </div>
      )}

      {weather && weather.data && weather.data.condition && (
        // Forecast component
        <Forecast weather={weather} toDate={toDate} />
      )}
      <Footer />
    </div>
  );
}

export default App;
