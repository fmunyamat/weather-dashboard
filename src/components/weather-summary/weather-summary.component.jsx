import { useContext, useState, useEffect } from 'react';
import { DashboardThemeContext } from '../../contexts/dashboard-theme.context';
import { WeatherDataContext } from '../../contexts/weather-data.context';
import { convertUTCToLocalTime } from '../../utils/formatting/time-format.utils';
import { ANIMATED_WEATHER_SUMMARY_ICONS, STATIC_WEATHER_SUMMARY_ICONS } from '../../constants/weather-icons';
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
    const [currentTemp, setCurrentTemp] = useState('--');
    const [feelsLikeTemp, setFeelsLikeTemp] = useState('--');
    const [sunriseTime, setSunriseTime] = useState('0:00 AM');
    const [sunsetTime, setSunsetTime] = useState('0:00 AM');
    const [humidity, setHumidity] = useState('--');
    const [windSpeed, setWindSpeed] = useState('--');
    const [pressure, setPressure] = useState('--');
    const [uv, setUv] = useState('--');
    const [weatherIcon, setWeatherIcon] = useState('--');
    const [weatherDesc, setWeatherDesc] = useState('--')
    const getCurrentWeather = (currentWeatherType) =>  currentWeather && Math.ceil(currentWeatherType);


    useEffect(() => {
        // get sunset and sunrise time for searched city
        if (fullWeather && fullWeather.current) {
            setCurrentTemp(getCurrentWeather(currentWeather.temp));
            setFeelsLikeTemp(getCurrentWeather(currentWeather.feels_like));
            setSunriseTime(convertUTCToLocalTime(currentWeather.sunrise + fullWeather.timezone_offset));
            setSunsetTime(convertUTCToLocalTime(currentWeather.sunset + fullWeather.timezone_offset));
            setWeatherIcon(ANIMATED_WEATHER_SUMMARY_ICONS[currentWeather.weather[0].icon]);
            setWeatherDesc(currentWeather.weather[0].description);
            setHumidity(currentWeather.humidity);
            setWindSpeed(currentWeather.wind_speed);
            setPressure(currentWeather.pressure);
            setUv(currentWeather.uvi);
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
                                <span><img src={STATIC_WEATHER_SUMMARY_ICONS.sunrise} alt="" /></span>
                            </Icon>
                            <Info theme={theme}>
                                <span>Sunrise</span>
                                <span className='sunrise-time'>{sunriseTime}</span>
                            </Info>
                        </div>
                        <div className="sunset">
                            <Icon theme={theme}>
                                <span><img src={STATIC_WEATHER_SUMMARY_ICONS.sunset} alt="" /></span>
                            </Icon>
                            <Info theme={theme}>
                                <span>Sunset</span>
                                <span className='sunset-time'>{sunsetTime}</span>
                            </Info>
                        </div>
                    </SunriseSunsetContainer>
                </Summary1>
                <Summary2>
                    {weatherIcon}
                    <WeatherDescription theme={theme}>{weatherDesc}</WeatherDescription>
                </Summary2>
                <Summary3>
                    <div className="humidity">
                        <GridIcon theme={theme}><img src={STATIC_WEATHER_SUMMARY_ICONS.humidity} alt="" /></GridIcon>
                        <GridNumber theme={theme}>{`${humidity}%`}</GridNumber>
                        <GridCategory theme={theme}>Humidity</GridCategory>
                    </div>
                    <div className="wind-speed">
                        <GridIcon theme={theme}><img src={STATIC_WEATHER_SUMMARY_ICONS.wind} alt="" /></GridIcon>
                        <GridNumber theme={theme}>{`${windSpeed}mph`}</GridNumber>
                        <GridCategory theme={theme}>Wind Speed</GridCategory>
                    </div>
                    <div className="pressure">
                        <GridIcon theme={theme}><img src={STATIC_WEATHER_SUMMARY_ICONS.pressure} alt="" /></GridIcon>
                        <GridNumber theme={theme}>{`${pressure}hpa`}</GridNumber>
                        <GridCategory theme={theme}>Pressure</GridCategory>
                    </div>
                    <div className="uv">
                        <GridIcon theme={theme}><img src={STATIC_WEATHER_SUMMARY_ICONS.uv} alt="" /></GridIcon>
                        <GridNumber theme={theme}>{uv}</GridNumber>
                        <GridCategory theme={theme}>UV</GridCategory>
                    </div>
                </Summary3>
            </WeatherSummaryContainer>
        </>
    );
};

export default WeatherSummary;