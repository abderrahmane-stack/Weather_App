"use client"
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';
import { WeatherData } from './types/weather';
import styles from './styles/Home.module.css';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; 

  const getWeather = async (city: string) => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      setWeatherData(null); 
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.imageContainer}>
          <img src="/view.jpg" alt="Background" className={styles.img} />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Weather App</h1>      
          <SearchForm onSearch={getWeather} />
          {weatherData && <WeatherDisplay weatherData={weatherData} />}
        </div>
      </div>
    </div>
  );
}
