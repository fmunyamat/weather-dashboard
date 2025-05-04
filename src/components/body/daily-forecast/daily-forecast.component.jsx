import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { selectFullWeather, selectDailyWeather, selectIsLoading } from '../../../store/weather/weather.selector';

import LoadingSpinner from '../../loading-spinner/loading-spinner.component';
import { DashboardThemeContext } from '../../../contexts/dashboard-theme.context';
import { convertUTCToLocalTime } from '../../../utils/formatting/time-format.utils';
import WeatherIcon from '../../global/weather-icon/weather-icon.component';
import Tooltip from '../../global/tooltip/tooltip.component';

import { 
    DailyForecastContainer,
    ForecastTitle,
    ForecastDisplay,
    ForecastGroupContainer,
    ForecastDateInfoContainer,
    ForecastDate,
    ForecastTemp
} from './daily-forecast.styles';

const DailyForecast = () => {
    const fullWeather = useSelector(selectFullWeather);
    const dailyWeather = useSelector(selectDailyWeather);
    const isLoading = useSelector(selectIsLoading);
    const { isDarkMode } = useContext(DashboardThemeContext);

    const weatherDailyIconStyles = {
        '01d': {
            transform: 'scale(1.5)'
        },
        '02d': {
            transform: 'scale(1.1)'
        },
        '03d': {
            transform: 'scale(1.2)'
        },
        '04d': {
            transform: 'scale(1.2)'
        },
        '09d': {
            transform: 'scale(1.3)',
            marginTop: '-5px',
            marginBottom: '5px'
        },
        '10d': {
            transform: 'scale(1.1)'
        },
        '11d': {
            transform: 'scale(1.2)'
        },
        '13d': {
            transform: 'scale(1.2)',
            marginTop: '-5px',
            marginBottom: '5px'
        },
        '50d': {
            transform: 'scale(1.2)',
            marginTop: '-6px',
            marginBottom: '6px'
        }
    };

    const tooltipForecastData = (sunrise, sunset, utcOffset, summary) => (
        <>
            <br/>
            <div>
                <span>{`Sunrise: ${convertUTCToLocalTime(sunrise + utcOffset, 'time')}`}</span>
                <br/>
                <span>{`Sunset: ${convertUTCToLocalTime(sunset + utcOffset, 'time')}`}</span>
            </div>
            <br/>
            <span>{`Summary: ${summary}`}</span>
            <br/>
        </>
    )
    
    return (
        <>
            <DailyForecastContainer $isDarkMode={isDarkMode}>
                {
                    isLoading ?
                    <LoadingSpinner /> :
                    <>
                        <ForecastTitle $isDarkMode={isDarkMode}>8 Day Forecast</ForecastTitle>
                        <ForecastDisplay>
                            {Array.isArray(dailyWeather) && dailyWeather.map((weatherData, index) => {
                                return ( 
                                    <React.Fragment key={index}>
                                        <Tooltip
                                            tooltipData={tooltipForecastData(
                                                weatherData.sunrise, 
                                                weatherData.sunset,
                                                fullWeather.timezone_offset,
                                                weatherData.summary
                                            )}>
                                            <ForecastGroupContainer>
                                                <ForecastDateInfoContainer $isDarkMode={isDarkMode}>
                                                    <ForecastDate>
                                                        <span className='daily-forecast-month'>{convertUTCToLocalTime(weatherData.dt, 'month')}</span>
                                                        <span className='daily-forecast-day'>{convertUTCToLocalTime(weatherData.dt, 'day')}</span>
                                                    </ForecastDate>
                                                    <div className="forecast-info">
                                                        <WeatherIcon stylesObject={weatherDailyIconStyles[weatherData.weather[0].icon]} iconCode={weatherData.weather[0].icon}/>
                                                        <ForecastTemp>
                                                            <span className="temp-max">{`${Math.round(weatherData.temp.max)}°`}</span>
                                                            <span className="temp-min">{` | ${Math.round(weatherData.temp.min)}°`}</span>
                                                        </ForecastTemp>
                                                    </div> 
                                                </ForecastDateInfoContainer>
                                            </ForecastGroupContainer>
                                        </Tooltip>
                                    </React.Fragment>
                                )
                            })}
                        </ForecastDisplay>
                    </>
                }
            </DailyForecastContainer>
        </>
    );
};

export default DailyForecast;