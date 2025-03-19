import ClearSkyDay from "../components/global/animated-weather-icons/clear sky/clear-sky-day.component";
import ClearSkyNight from "../components/global/animated-weather-icons/clear sky/clear-sky-night.component";
import FewCloudsDay from "../components/global/animated-weather-icons/clouds/few-clouds-day.component";
import FewCloudsNight from "../components/global/animated-weather-icons/clouds/few-clouds-night.component";
import ScatteredClouds from "../components/global/animated-weather-icons/clouds/scattered-clouds.component";
import ShowerRain from "../components/global/animated-weather-icons/rain/shower-rain.component";
import RainDay from "../components/global/animated-weather-icons/rain/rain-day.component";
import RainNight from "../components/global/animated-weather-icons/rain/rain-night.component";
import Thunderstorm from "../components/global/animated-weather-icons/thunderstorm/thunderstorm.component";
import Snow from "../components/global/animated-weather-icons/snow/snow.component";
import Mist from "../components/global/animated-weather-icons/mist/mist.component";
import sunriseIcon from '../assets/weather-icons/sunrise.png'
import sunsetIcon from '../assets/weather-icons/sunset.png';
import humidityIcon from '../assets/weather-icons/humidity.png';
import windIcon from '../assets/weather-icons/wind.png';
import uvIcon from '../assets/weather-icons/uv.png';
import pressureGaugeIcon from '../assets/weather-icons/gauge.png';

export const animatedIcons = (style) => ({
    '01d': <ClearSkyDay style={style}/>,
    '01n': <ClearSkyNight style={style}/>,
    '02d': <FewCloudsDay style={style}/>,
    '02n': <FewCloudsNight style={style}/>,
    '03d': <ScatteredClouds style={style}/>,
    '03n': <ScatteredClouds style={style}/>,
    '04d': <ScatteredClouds style={style}/>,
    '04n': <ScatteredClouds style={style}/>,
    '09d': <ShowerRain style={style}/>,
    '09n': <ShowerRain style={style}/>,
    '10d': <RainDay style={style}/>,
    '10n': <RainNight style={style}/>,
    '11d': <Thunderstorm style={style}/>,
    '11n': <Thunderstorm style={style}/>,
    '13d': <Snow style={style}/>,
    '13n': <Snow style={style}/>,
    '50d': <Mist style={style}/>,
    '50n': <Mist style={style}/>
})

export const STATIC_WEATHER_SUMMARY_ICONS = {
    sunrise: sunriseIcon,
    sunset: sunsetIcon,
    humidity: humidityIcon,
    wind: windIcon,
    uv: uvIcon,
    pressure: pressureGaugeIcon
}