import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { DashboardThemeContext } from '../../contexts/dashboard-theme.context';
import { WeatherDataContext } from '../../contexts/weather-data.context.jsx';
import { LocationContext } from '../../contexts/location.context.jsx';
import { convertUTCToLocalTime, formatUnixTimestampToDate } from '../../utils/formatting/time-format.utils.js';
import { CityTimeContainer, City, CurrentTime, CurrentDate } from './city-time.styles.jsx';
import './city-time.styles.jsx';

const CityTime = () => {
    const { theme } = useContext(DashboardThemeContext);
    const { displayCityText } = useContext(LocationContext);
    const { fullWeather } = useContext(WeatherDataContext);
    const [currentTime, setCurrentTime] = useState('0:00 AM');
    const [currentDate, setCurrentDate] = useState('---');

  useEffect(() => {
    if (fullWeather && fullWeather.current) {
      const utcUnixTimestamp = fullWeather.current.dt;
      const localTimezoneOffset = fullWeather.timezone_offset;

      setCurrentTime(convertUTCToLocalTime(utcUnixTimestamp + localTimezoneOffset));
      setCurrentDate(formatUnixTimestampToDate(utcUnixTimestamp));
    }
  }, [fullWeather]);
  
    return (
        <>
            <CityTimeContainer theme={theme}>
                <City theme={theme}>{displayCityText}</City>
                <CurrentTime theme={theme}>{currentTime}</CurrentTime>
                <CurrentDate theme={theme}>{currentDate}</CurrentDate>
            </CityTimeContainer>
        </>
    );
};

export default CityTime;