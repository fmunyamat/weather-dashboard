import { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectFullWeather } from '../../../store/weather/weather.selector.js';
import { selectIsLoading } from '../../../store/weather/weather.selector.js';

import { convertUTCToLocalTime } from '../../../utils/formatting/time-format.utils.js';
import { DashboardThemeContext } from '../../../contexts/dashboard-theme.context.jsx';
import { LocationContext } from '../../../contexts/location.context.jsx';
import LoadingSpinner from '../../loading-spinner/loading-spinner.component.jsx';

import { CityTimeContainer, City, CurrentTime, CurrentDate } from './city-time.styles.jsx';

const CityTime = () => {
    const { isDarkMode } = useContext(DashboardThemeContext);
    const { displayCityText } = useContext(LocationContext);
    const fullWeather = useSelector(selectFullWeather);
    const isLoading = useSelector(selectIsLoading);

    // Use useMemo to avoid unnecessary re-renders
    const { currentTime, currentDate } = useMemo(() => {
        if (!fullWeather?.current) return { currentTime: '0:00 AM', currentDate: '---' };

        const localTimestamp = fullWeather.current.dt + fullWeather.timezone_offset;
        return {
            currentTime: convertUTCToLocalTime(localTimestamp, 'time'),
            currentDate: convertUTCToLocalTime(localTimestamp, 'date'),
        };
    }, [fullWeather]);

    return (
        <CityTimeContainer $isDarkMode={isDarkMode}>
            {
                isLoading ?
                <LoadingSpinner /> :
                <>
                    <City $isDarkMode={isDarkMode}>{displayCityText}</City>
                    <CurrentTime $isDarkMode={isDarkMode}>{currentTime}</CurrentTime>
                    <CurrentDate $isDarkMode={isDarkMode}>{currentDate}</CurrentDate>
                </>
            }
        </CityTimeContainer>
    );
};

export default CityTime;
