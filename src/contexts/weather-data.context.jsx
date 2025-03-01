import { createContext, useState } from "react";
import { fetchWeatherData } from "../utils/apis/weather-api.utils";

export const WeatherDataContext = createContext({
    fullWeather: {},
    setFullWeather: () => null,
    currentWeather: {},
    setCurrentWeather: () => null,
    hourlyWeather: {},
    setHourlyWeather: () => null,
    dailyWeather: {},
    setDailyWeather: () => null,
    fetchWeatherForecast: () => null
});


export const WeatherDataProvider = ({ children }) => {
    const [fullWeather, setFullWeather] = useState({});
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyWeather, setHourlyWeather] = useState({});
    const [dailyWeather, setDailyWeather] = useState({});

    const fetchWeatherForecast = async (lat, long) => {
        try {
    
            const weather = await fetchWeatherData(lat, long);
            setFullWeather(weather);
            setCurrentWeather(weather.current);
            setHourlyWeather(weather.hourly);
            setDailyWeather(weather.daily)
            
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        }
    };

    const value = { fullWeather, setFullWeather, currentWeather, setCurrentWeather, hourlyWeather, setHourlyWeather, dailyWeather, setDailyWeather, fetchWeatherForecast };

    return <WeatherDataContext.Provider value={value}>{ children }</WeatherDataContext.Provider>
};