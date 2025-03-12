import CityTime from '../city-time/city-time.component';
import WeatherSummary from '../weather-summary/weather-summary.component';
import DailyForecast from '../daily-forecast/daily-forecast.component';
import HourlyForecast from '../hourly-forecast/hourly-forecast.component';
import './weather-body.styles.scss';

const WeatherBody = () => {
    return (
        <>
            <div className="top-dashboard">
                <CityTime />
                <WeatherSummary />
            </div>
            <div className="bottom-dashboard">
                <HourlyForecast />
                <DailyForecast />
            </div>
        </>
    );
};

export default WeatherBody;