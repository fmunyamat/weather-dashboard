import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { DashboardThemeContext } from '../../../contexts/dashboard-theme.context.jsx';
import { WeatherDataContext } from '../../../contexts/weather-data.context.jsx';
import { LocationContext } from '../../../contexts/location.context.jsx';
import { convertUTCToLocalTime } from '../../../utils/formatting/time-format.utils.js';
import { CityTimeContainer, City, CurrentTime, CurrentDate } from './city-time.styles.jsx';
import './city-time.styles.jsx';

const CityTime = () => {
    const { isDarkMode } = useContext(DashboardThemeContext);
    const { displayCityText } = useContext(LocationContext);
    const { fullWeather } = useContext(WeatherDataContext);
    const [currentTime, setCurrentTime] = useState('0:00 AM');
    const [currentDate, setCurrentDate] = useState('---');

    useEffect(() => {
        if (fullWeather?.current) {
            const { dt } = fullWeather.current;
            const { timezone_offset } = fullWeather;

            setCurrentTime(convertUTCToLocalTime(dt + timezone_offset, 'time'));
            setCurrentDate(convertUTCToLocalTime(dt, 'date'));
        }
    }, [fullWeather]);
  
    return (
        <CityTimeContainer $isDarkMode={isDarkMode}>
            <City $isDarkMode={isDarkMode}>{displayCityText}</City>
            <CurrentTime $isDarkMode={isDarkMode}>{currentTime}</CurrentTime>
            <CurrentDate $isDarkMode={isDarkMode}>{currentDate}</CurrentDate>
        </CityTimeContainer>
    );
};

export default CityTime;