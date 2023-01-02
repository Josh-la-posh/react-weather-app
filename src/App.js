import './App.css';
import Search from './components/search/search';
import { Forecast } from './components/forecast/forecast';
import { CurrentWeather } from './components/current-weather/currentWeather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastFetch, setForecastFetch] = useState(null);

  const handleSearchChange = (data) => {
    const [lat, lon] = data.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: data.label, ...weatherResponse});
      setForecastFetch({city: data.label, ...forecastResponse})
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
    </div>
  );
}

export default App;
