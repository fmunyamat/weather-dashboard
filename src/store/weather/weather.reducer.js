import { WEATHER_ACTION_TYPE } from "./weather.types";

const INITIAL_STATE = {
    fullWeather: {},
    isLoading: false,
    error: null
}

export const weatherReducer = (state = INITIAL_STATE, action={}) => {
    const { type, payload } = action;

    switch (type) {
        case WEATHER_ACTION_TYPE.FETCH_WEATHER_START:
            return {
                ...state,
                isLoading: true
            }
        case WEATHER_ACTION_TYPE.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                fullWeather: payload,
                isLoading: false
            }
        case WEATHER_ACTION_TYPE.FETCH_WEATHER_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state;
    }
}