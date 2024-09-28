// components/WeatherDisplay.tsx
import { WeatherData } from '../types/weather';

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) return null;

  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div>
      <h3>Weather in {weatherData.name}</h3>
      <img src={iconUrl} alt={weatherData.weather[0].description} />
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Conditions: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
