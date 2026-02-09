import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
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
      <p className="weather-card__temp">{weatherData.temp.F} &deg;</p>
      <img
        src={weatherOptionUrl}
        alt={altText}
        className="weather-card__img"
      />
    </section>
  );
}

export default WeatherCard;
