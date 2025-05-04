import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.weather;

export const selectFullWeather = createSelector(
    [selectCategoryReducer],
    (weather) => weather.fullWeather
);

export const selectCurrentWeather = createSelector(
    [selectFullWeather],
    (fullWeather) => fullWeather.current
)

export const selectHourlyWeather = createSelector(
    [selectFullWeather],
    (fullWeather) => fullWeather.hourly
)

export const selectDailyWeather = createSelector(
    [selectFullWeather],
    (fullWeather) => fullWeather.daily
)

export const selectIsLoading = createSelector(
    [selectCategoryReducer],
    (weather) => weather.isLoading
)