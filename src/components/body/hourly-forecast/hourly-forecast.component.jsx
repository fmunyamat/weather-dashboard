import React, { useContext, useRef, useState } from 'react';
import { WeatherDataContext } from '../../../contexts/weather-data.context';
import { DashboardThemeContext } from '../../../contexts/dashboard-theme.context';
import { convertUTCToLocalTime } from '../../../utils/formatting/time-format.utils';
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

const ICON_SIZES = {
    '01d': 1.7, '01n': 1.7,
    '02d': 1.2, '02n': 1.3,
    '03d': 1.3, '03n': 1.3,
    '04d': 1.3, '04n': 1.3,
    '09d': 1.4, '09n': 1.4,
    '10d': 1.2, '10n': 1.3,
    '11d': 1.3, '11n': 1.3,
    '13d': 1.3, '13n': 1.3,
    '50d': 1.4
};

const HourlyForecast = () => {
    const { currentWeather, hourlyWeather, fullWeather } = useContext(WeatherDataContext);
    const { isDarkMode } = useContext(DashboardThemeContext);

    const limitHourlyForecast = Array.isArray(hourlyWeather) && hourlyWeather.slice(0,30);
    
    const hourlyTheme = (hourlyTime) => {
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
            <ForecastTitle $isDarkMode={isDarkMode}>Hourly Forecast</ForecastTitle>
            <HourlyWeatherButtonGroup>
                <ArrowWrapper $isDarkMode={isDarkMode} onClick={() => scrollByAmount('left')}>
                    <ArrowBackIosNewIcon />
                </ArrowWrapper>
                {limitHourlyForecast && (
                    <HoScrollingContainer ref={scrollContainerRef} objectToMap={limitHourlyForecast}>
                        {(hourData) => (
                            <HourlyDataGroup style={{background: `linear-gradient(to bottom, ${hourlyTheme(hourData.dt)})`}}>
                                <DateTime>{formatDate(hourData.dt, 'month')} {formatDate(hourData.dt, 'day')}</DateTime>
                                <DateTime>{formatDate(hourData.dt, 'time')}</DateTime>
                                <HourlyInfo>
                                    <WeatherIcon
                                        stylesObject={{ transform: `scale(${ICON_SIZES[hourData.weather[0].icon]})` }}
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
        </HourlyForecastContainer>
    );
};

export default HourlyForecast;
