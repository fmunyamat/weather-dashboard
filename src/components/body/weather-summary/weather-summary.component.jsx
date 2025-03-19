import { useContext, useState, useEffect } from 'react';
import { DashboardThemeContext } from '../../../contexts/dashboard-theme.context';
import { WeatherDataContext } from '../../../contexts/weather-data.context';
import { convertUTCToLocalTime } from '../../../utils/formatting/time-format.utils';
import { STATIC_WEATHER_SUMMARY_ICONS } from '../../../constants/weather-icons';
import WeatherIcon from '../../global/weather-icon/weather-icon.component';
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
    const { isDarkMode } = useContext(DashboardThemeContext);
    const { fullWeather, currentWeather } = useContext(WeatherDataContext);
    const [currentTemp, setCurrentTemp] = useState('--');
    const [feelsLikeTemp, setFeelsLikeTemp] = useState('--');
    const [sunriseTime, setSunriseTime] = useState('0:00 AM');
    const [sunsetTime, setSunsetTime] = useState('0:00 AM');
    const [humidity, setHumidity] = useState('--');
    const [windSpeed, setWindSpeed] = useState('--');
    const [pressure, setPressure] = useState('--');
    const [uv, setUv] = useState('--');
    const [weatherDesc, setWeatherDesc] = useState('--')
    const getCurrentWeather = (currentWeatherType) =>  currentWeather && Math.ceil(currentWeatherType);
    const weatherIconCode = fullWeather.current && currentWeather.weather[0].icon;

    const weatherSummaryIconStyles = {
        '01d': {
            transform: 'scale(8)',
            paddingBottom: '10px'
        },
        '01n': {
            transform: 'scale(8)',
            paddingBottom: '12px'
        },
        '02d': {
            transform: 'scale(6)',
            paddingBottom: '8px',
            paddingLeft: '0.5vw'
        },
        '02n': {
            transform: 'scale(6)',
            paddingBottom: '8px',
            paddingRight: '0.5vw'
        },
        '03d': {
            transform: 'scale(6.5)',
            paddingBottom: '8px'
        },
        '03n': {
            transform: 'scale(6.5)',
            paddingBottom: '8px'
        },
        '04d': {
            transform: 'scale(6.5)',
            paddingBottom: '8px'
        },
        '04n': {
            transform: 'scale(6.5)',
            paddingBottom: '8px'
        },
        '09d': {
            transform: 'scale(6)',
            paddingBottom: '23px'
        },
        '09n': {
            transform: 'scale(6)',
            paddingBottom: '23px'
        },
        '10d': {
            transform: 'scale(5)',
            paddingBottom: '20px'
        },
        '10n': {
            transform: 'scale(6)',
            paddingBottom: '23px'
        },
        '11d': {
            transform: 'scale(5)',
            paddingBottom: '25px'
        },
        '11n': {
            transform: 'scale(5)',
            paddingBottom: '25px'
        },
        '13d': {
            transform: 'scale(6)',
            paddingBottom: '20px'
        },
        '13n': {
            transform: 'scale(6)',
            paddingBottom: '20px'
        },
        '50d': {
            transform: 'scale(6)',
            paddingBottom: '23px'
        },
        '50n': {
            transform: 'scale(6)',
            paddingBottom: '23px'
        }
    };

    useEffect(() => {
        if (fullWeather && fullWeather.current) {
            setCurrentTemp(getCurrentWeather(currentWeather.temp));
            setFeelsLikeTemp(getCurrentWeather(currentWeather.feels_like));
            setSunriseTime(convertUTCToLocalTime(currentWeather.sunrise + fullWeather.timezone_offset, 'time'));
            setSunsetTime(convertUTCToLocalTime(currentWeather.sunset + fullWeather.timezone_offset, 'time'));
            setWeatherDesc(currentWeather.weather[0].description);
            setHumidity(currentWeather.humidity);
            setWindSpeed(currentWeather.wind_speed);
            setPressure(currentWeather.pressure);
            setUv(currentWeather.uvi);
        }
    }, [fullWeather]);

    return (
        <>
            <WeatherSummaryContainer $isDarkMode={isDarkMode}>
                <Summary1>
                    <TempContainer>
                        <Temp $isDarkMode={isDarkMode}>{`${currentTemp}°F`}</Temp>
                        <FeelsLikeTemp $isDarkMode={isDarkMode}>Feels Like <span>{`${feelsLikeTemp}°F`}</span></FeelsLikeTemp>
                    </TempContainer>
                    <SunriseSunsetContainer>
                        <div className="sunrise">
                            <Icon $isDarkMode={isDarkMode}>
                                <span><img src={STATIC_WEATHER_SUMMARY_ICONS.sunrise} alt="" /></span>
                            </Icon>
                            <Info $isDarkMode={isDarkMode}>
                                <span>Sunrise</span>
                                <span className='sunrise-time'>{sunriseTime}</span>
                            </Info>
                        </div>
                        <div className="sunset">
                            <Icon $isDarkMode={isDarkMode}>
                                <span><img src={STATIC_WEATHER_SUMMARY_ICONS.sunset} alt="" /></span>
                            </Icon>
                            <Info $isDarkMode={isDarkMode}>
                                <span>Sunset</span>
                                <span className='sunset-time'>{sunsetTime}</span>
                            </Info>
                        </div>
                    </SunriseSunsetContainer>
                </Summary1>
                <Summary2>
                    <WeatherIcon stylesObject={weatherSummaryIconStyles[weatherIconCode]} iconCode={weatherIconCode}/>
                    <WeatherDescription $isDarkMode={isDarkMode}>{weatherDesc}</WeatherDescription>
                </Summary2>
                <Summary3>
                    <div className="humidity">
                        <GridIcon $isDarkMode={isDarkMode}><img src={STATIC_WEATHER_SUMMARY_ICONS.humidity} alt="" /></GridIcon>
                        <GridNumber $isDarkMode={isDarkMode}>{`${humidity}%`}</GridNumber>
                        <GridCategory $isDarkMode={isDarkMode}>Humidity</GridCategory>
                    </div>
                    <div className="wind-speed">
                        <GridIcon $isDarkMode={isDarkMode}><img src={STATIC_WEATHER_SUMMARY_ICONS.wind} alt="" /></GridIcon>
                        <GridNumber $isDarkMode={isDarkMode}>{`${Math.round(windSpeed)}mph`}</GridNumber>
                        <GridCategory $isDarkMode={isDarkMode}>Wind Speed</GridCategory>
                    </div>
                    <div className="pressure">
                        <GridIcon $isDarkMode={isDarkMode}><img src={STATIC_WEATHER_SUMMARY_ICONS.pressure} alt="" /></GridIcon>
                        <GridNumber $isDarkMode={isDarkMode}>{`${pressure}hpa`}</GridNumber>
                        <GridCategory $isDarkMode={isDarkMode}>Pressure</GridCategory>
                    </div>
                    <div className="uv">
                        <GridIcon $isDarkMode={isDarkMode}><img src={STATIC_WEATHER_SUMMARY_ICONS.uv} alt="" /></GridIcon>
                        <GridNumber $isDarkMode={isDarkMode}>{uv}</GridNumber>
                        <GridCategory $isDarkMode={isDarkMode}>UV</GridCategory>
                    </div>
                </Summary3>
            </WeatherSummaryContainer>
        </>
    );
};

export default WeatherSummary;