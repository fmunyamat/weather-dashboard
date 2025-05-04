import { fetchWeatherData } from "../../utils/apis/weather-api.utils";
import { createAction } from "../../utils/reducer/reducer.utils";

import { WEATHER_ACTION_TYPE } from "./weather.types";

export const fetchWeatherStart = () =>
    createAction(WEATHER_ACTION_TYPE.FETCH_WEATHER_START);

export const fetchWeatherSuccess = (weatherObject) =>
    createAction(WEATHER_ACTION_TYPE.FETCH_WEATHER_SUCCESS, weatherObject)

export const fetchWeatherError = (error) =>
    createAction(WEATHER_ACTION_TYPE.FETCH_WEATHER_ERROR, error);

export const fetchWeatherForecast = (lat, long) => async (dispatch) => {
    dispatch(fetchWeatherStart());

    try {

        const weatherObject = await fetchWeatherData(lat, long);
        dispatch(fetchWeatherSuccess(weatherObject));

    } catch (error) {
        dispatch(fetchWeatherError(error));
    }
};