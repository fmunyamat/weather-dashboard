import { useContext } from 'react';
import CityTime from '../city-time/city-time.component';
import WeatherSummary from '../weather-summary/weather-summary.component';
import './weather-body.styles.scss';

const WeatherBody = () => {
    return (
        <>
            <div className="top-dashboard">
                <CityTime />
                <WeatherSummary />
            </div>
            <div className="bottom-dashboard">
                
            </div>
        </>
    );
};

export default WeatherBody;