import { useContext, useState, useEffect } from 'react';
import { DashboardThemeContext } from '../../contexts/dashboard-theme.context';
import { WeatherDataContext } from '../../contexts/weather-data.context';
import { convertUTCToLocalTime, formatUnixTimestampToDate } from '../../utils/formatting/time-format.utils';
import SunnyWeatherIcon from '../animated-weather-icons/sunny/sunny.component';
import sunrise from '../../assets/weather-icons/sunrise.png';
import sunset from '../../assets/weather-icons/sunset.png';
import humidity from '../../assets/weather-icons/humidity.png';
import wind from '../../assets/weather-icons/wind.png';
import uv from '../../assets/weather-icons/uv.png';
import pressureGauge from '../../assets/weather-icons/gauge.png';
import {
    WeatherSummaryContainer,
    Summary1,
    TempContainer,
    Temp,
    FeelsLikeTemp,
    SunriseSunsetContainer,
    Icon,
    Info,
    Summary2,
    WeatherDescription,
    Summary3,
    GridIcon,
    GridNumber,
    GridCategory
} from './weather-summary.styles';

const WeatherSummary = () => {
    const { theme } = useContext(DashboardThemeContext);
    const { fullWeather, currentWeather } = useContext(WeatherDataContext);
    const [currentTemp, setCurrentTemp] = useState('--°F');
    const [feelsLikeTemp, setFeelsLikeTemp] = useState('--°F');
    const [sunriseTime, setSunriseTime] = useState('0:00 AM');
    const [sunsetTime, setSunsetTime] = useState('0:00 AM');
    const getCurrentWeather = (currentWeatherType) =>  currentWeather && Math.ceil(currentWeatherType);


    useEffect(() => {
        // get sunset and sunrise time for searched city
        if (fullWeather && fullWeather.current) {
            setCurrentTemp(getCurrentWeather(currentWeather.temp));
            setFeelsLikeTemp(getCurrentWeather(currentWeather.feels_like));
            setSunriseTime(convertUTCToLocalTime(currentWeather.sunrise + fullWeather.timezone_offset));
            setSunsetTime(convertUTCToLocalTime(currentWeather.sunset + fullWeather.timezone_offset));
        }
    }, [fullWeather]);

    return (
        <>
            <WeatherSummaryContainer theme={theme}>
                <Summary1>
                    <TempContainer>
                        <Temp theme={theme}>{`${currentTemp}°F`}</Temp>
                        <FeelsLikeTemp theme={theme}>Feels Like <span>{`${feelsLikeTemp}°F`}</span></FeelsLikeTemp>
                    </TempContainer>
                    <SunriseSunsetContainer>
                        <div className="sunrise">
                            <Icon theme={theme}>
                                <span><img src={sunrise} alt="" /></span>
                            </Icon>
                            <Info theme={theme}>
                                <span>Sunrise</span>
                                <span className='sunrise-time'>{sunriseTime}</span>
                            </Info>
                        </div>
                        <div className="sunset">
                            <Icon theme={theme}>
                                <span><img src={sunset} alt="" /></span>
                            </Icon>
                            <Info theme={theme}>
                                <span>Sunset</span>
                                <span className='sunset-time'>{sunsetTime}</span>
                            </Info>
                        </div>
                    </SunriseSunsetContainer>
                </Summary1>
                <Summary2>
                    <SunnyWeatherIcon />
                    <WeatherDescription theme={theme}>Sunny</WeatherDescription>
                </Summary2>
                <Summary3>
                    <div className="humidity">
                        <GridIcon theme={theme}><img src={humidity} alt="" /></GridIcon>
                        <GridNumber theme={theme}>41%</GridNumber>
                        <GridCategory theme={theme}>Humidity</GridCategory>
                    </div>
                    <div className="wind-speed">
                        <GridIcon theme={theme}><img src={wind} alt="" /></GridIcon>
                        <GridNumber theme={theme}>5mph</GridNumber>
                        <GridCategory theme={theme}>Wind Speed</GridCategory>
                    </div>
                    <div className="pressure">
                        <GridIcon theme={theme}><img src={pressureGauge} alt="" /></GridIcon>
                        <GridNumber theme={theme}>997hpa</GridNumber>
                        <GridCategory theme={theme}>Pressure</GridCategory>
                    </div>
                    <div className="uv">
                        <GridIcon theme={theme}><img src={uv} alt="" /></GridIcon>
                        <GridNumber theme={theme}>8</GridNumber>
                        <GridCategory theme={theme}>UV</GridCategory>
                    </div>
                </Summary3>
            </WeatherSummaryContainer>
        </>
    );
};

export default WeatherSummary;