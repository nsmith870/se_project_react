import { useContext } from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnit";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

 const weatherOptionUrl = filteredOptions[0]?.url || "/fallback-weather.png";


const altText = weatherData?.condition
    ? `Weather: ${weatherData.condition}${weatherData.isDay ? " (day)" : " (night)"}`
    : "Weather background";




   return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;
      </p>
      <img src={weatherOptionUrl} alt={altText} className="weather-card__img" />
    </section>
  );
}

export default WeatherCard;
