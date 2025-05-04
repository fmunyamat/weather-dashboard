import React, { useContext, useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectFullWeather, selectCurrentWeather, selectHourlyWeather, selectIsLoading } from '../../../store/weather/weather.selector';

import LoadingSpinner from '../../loading-spinner/loading-spinner.component';
import { DashboardThemeContext } from '../../../contexts/dashboard-theme.context';
import { convertUTCToLocalTime } from '../../../utils/formatting/time-format.utils';
import { HOURLY_FORECAST_ICON_STYLES } from '../../../constants/weather-icons';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WeatherIcon from '../../global/weather-icon/weather-icon.component';

import { 
    HourlyForecastContainer,
    ForecastTitle,
    HourlyWeatherButtonGroup,
    ArrowWrapper,
    HoScrollingContainer,
    HourlyDataGroup,
    DateTime,
    HourlyInfo,
    Temp,
    WindSpeed,
    DegreeArrow
} from './hourly-forecast.styles';

const HourlyForecast = () => {
    const fullWeather = useSelector(selectFullWeather);
    const hourlyWeather = useSelector(selectHourlyWeather);
    const currentWeather = useSelector(selectCurrentWeather);
    const isLoading = useSelector(selectIsLoading);
    const { isDarkMode } = useContext(DashboardThemeContext);

    // Memoized to prevent unnecessary recalculations
    const limitHourlyForecast = useMemo(() => 
        Array.isArray(hourlyWeather) ? hourlyWeather.slice(0, 30) : [], 
        [hourlyWeather]
    );
    
    const hourlyContainerTheme = (hourlyTime) => {
        // Convert timestamps to Date objects
        const hourRef = new Date(hourlyTime * 1000);
        const sunrise = new Date(currentWeather.sunrise * 1000);
        const sunset = new Date(currentWeather.sunset * 1000);
        
        // Create proper next day sunrise/sunset (without modifying originals)
        const nextDaySunrise = new Date(sunrise);
        nextDaySunrise.setDate(nextDaySunrise.getDate() + 1);
        
        const nextDaySunset = new Date(sunset);
        nextDaySunset.setDate(nextDaySunset.getDate() + 1);
        
        // Determine if it's daytime or nighttime
        const isDayTime = 
            (hourRef >= sunrise && hourRef < sunset) || // Current day daytime
            (hourRef >= nextDaySunrise && hourRef < nextDaySunset); // Next day daytime
        
        // Return appropriate theme colors
        return isDayTime ? '#ffa34e, #e4d7be' : '#615f89, #a6acc2';
    };

    const formatDate = (timestamp, format) => 
        convertUTCToLocalTime(timestamp + fullWeather.timezone_offset, format);

    const scrollContainerRef = useRef(null);
    const scrollByAmount = (direction) => {
        scrollContainerRef.current?.scrollBy({
            left: direction === 'left' ? -400 : 400, // 4 items per scroll
            behavior: 'smooth'
        });
    };

    return (
        <HourlyForecastContainer $isDarkMode={isDarkMode}>
            {
                isLoading ?
                <LoadingSpinner /> :
                <>
                    <ForecastTitle $isDarkMode={isDarkMode}>Hourly Forecast</ForecastTitle>
                    <HourlyWeatherButtonGroup>
                        <ArrowWrapper $isDarkMode={isDarkMode} onClick={() => scrollByAmount('left')}>
                            <ArrowBackIosNewIcon />
                        </ArrowWrapper>
                        {limitHourlyForecast && (
                            <HoScrollingContainer ref={scrollContainerRef} objectToMap={limitHourlyForecast}>
                                {(hourData) => (
                                    <HourlyDataGroup style={{background: `linear-gradient(to bottom, ${hourlyContainerTheme(hourData.dt)})`}}>
                                        <DateTime>{formatDate(hourData.dt, 'month')} {formatDate(hourData.dt, 'day')}</DateTime>
                                        <DateTime>{formatDate(hourData.dt, 'time')}</DateTime>
                                        <HourlyInfo>
                                            <WeatherIcon
                                                stylesObject={{ transform: `scale(${HOURLY_FORECAST_ICON_STYLES[hourData.weather[0].icon]})` }}
                                                iconCode={hourData.weather[0].icon}
                                            />
                                            <Temp>{`${Math.round(hourData.temp)}°F`}</Temp>
                                            <DegreeArrow style={{ transform: `scale(0.6) rotate(${hourData.wind_deg}deg)` }} />
                                            <WindSpeed>{`${Math.round(hourData.wind_speed)}mph`}</WindSpeed>
                                        </HourlyInfo>
                                    </HourlyDataGroup>
                                )}
                            </HoScrollingContainer>
                        )}
                        <ArrowWrapper $isDarkMode={isDarkMode} onClick={() => scrollByAmount('right')}>
                            <ArrowForwardIosIcon />
                        </ArrowWrapper>
                    </HourlyWeatherButtonGroup>
                </>
            }
        </HourlyForecastContainer>
    );
};

export default HourlyForecast;
