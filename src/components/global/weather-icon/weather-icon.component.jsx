import { animatedIcons } from "../../../constants/weather-icons";


const WeatherIcon = ({ stylesObject, iconCode }) => {
    // console.log('stylesObject: ', stylesObject);
    // console.log('iconCode: ', iconCode);
    
    

    return (
        <>
            {animatedIcons(stylesObject)[iconCode]}
        </>
    );
};

export default WeatherIcon;