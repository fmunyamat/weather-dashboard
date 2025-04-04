import { createContext, useReducer } from "react";
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

const WEATHER_ACTION_TYPE = {
    SET_WEATHER: 'SET_WEATHER'
}

const INITIAL_STATE = {
    fullWeather: {},
    currentWeather: {},
    hourlyWeather: {},
    dailyWeather: {}
}

const weatherReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case WEATHER_ACTION_TYPE.SET_WEATHER:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Unhandled type ${type} in weatherReducer.`)
    }
}

export const WeatherDataProvider = ({ children }) => {
    const [{ fullWeather, currentWeather, hourlyWeather, dailyWeather }, dispatch] = useReducer(weatherReducer, INITIAL_STATE);
    const dispatcher = (payload) => dispatch({ type: WEATHER_ACTION_TYPE.SET_WEATHER, payload: payload });

    const updateWeatherReducer = (weatherObject) => {
        dispatcher({
            fullWeather: weatherObject,
            currentWeather: weatherObject.current,
            hourlyWeather: weatherObject.hourly,
            dailyWeather: weatherObject.daily
        });
    };

    const fetchWeatherForecast = async (lat, long) => {
        try {

            const weather = await fetchWeatherData(lat, long);
            updateWeatherReducer(weather);

        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        }
    };

    const value = { fullWeather, currentWeather, hourlyWeather, dailyWeather, fetchWeatherForecast };

    return <WeatherDataContext.Provider value={value}>{children}</WeatherDataContext.Provider>
};