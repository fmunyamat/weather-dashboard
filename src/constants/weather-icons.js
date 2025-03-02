import ClearSkyDay from "../components/animated-weather-icons/clear sky/clear-sky-day.component";
import ClearSkyNight from "../components/animated-weather-icons/clear sky/clear-sky-night.component";
import FewCloudsDay from "../components/animated-weather-icons/clouds/few-clouds-day.component";
import FewCloudsNight from "../components/animated-weather-icons/clouds/few-clouds-night.component";
import ScatteredClouds from "../components/animated-weather-icons/clouds/scattered-clouds.component";
import ShowerRain from "../components/animated-weather-icons/rain/shower-rain.component";
import RainDay from "../components/animated-weather-icons/rain/rain-day.component";
import RainNight from "../components/animated-weather-icons/rain/rain-night.component";
import Thunderstorm from "../components/animated-weather-icons/thunderstorm/thunderstorm.component";
import Snow from "../components/animated-weather-icons/snow/snow.component";
import Mist from "../components/animated-weather-icons/mist/mist.component";
import sunriseIcon from '../assets/weather-icons/sunrise.png'
import sunsetIcon from '../assets/weather-icons/sunset.png';
import humidityIcon from '../assets/weather-icons/humidity.png';
import windIcon from '../assets/weather-icons/wind.png';
import uvIcon from '../assets/weather-icons/uv.png';
import pressureGaugeIcon from '../assets/weather-icons/gauge.png';

export const ANIMATED_WEATHER_SUMMARY_ICONS = {
    '01d': <ClearSkyDay />,
    '01n': <ClearSkyNight />,
    '02d': <FewCloudsDay />,
    '02n': <FewCloudsNight />,
    '03d': <ScatteredClouds />,
    '03n': <ScatteredClouds />,
    '04d': <ScatteredClouds />,
    '04n': <ScatteredClouds />,
    '09d': <ShowerRain />,
    '09n': <ShowerRain />,
    '10d': <RainDay />,
    '10n': <RainNight />,
    '11d': <Thunderstorm />,
    '11n': <Thunderstorm />,
    '13d': <Snow />,
    '13n': <Snow />,
    '50d': <Mist />,
    '50n': <Mist />
}

export const STATIC_WEATHER_SUMMARY_ICONS = {
    sunrise: sunriseIcon,
    sunset: sunsetIcon,
    humidity: humidityIcon,
    wind: windIcon,
    uv: uvIcon,
    pressure: pressureGaugeIcon
}