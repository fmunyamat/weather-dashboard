import { useContext, useEffect, useState } from "react";
import { DashboardThemeContext } from "../../contexts/dashboard-theme.context";
import { WeatherDataContext } from "../../contexts/weather-data.context";
import { getCoordinates } from "../../utils/apis/geocode-api.utils";
import AddressAutocomplete from "../address-autocomplete/address-autocomplete.component";
import { MaterialUISwitch } from "../material-ui-switch/material-ui-switch.component";
import CurrentLocationButton from "../current-location-button/current-location-button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { WeatherHeaderContainer, SwitchContainer, AddressInputContainer } from "./weather-header.styles";

const WeatherHeader = () => {
    const { currentWeather, hourlyWeather, dailyWeather, fetchWeatherForecast } = useContext(WeatherDataContext);
    const { theme, setTheme } = useContext(DashboardThemeContext);
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({ lat: null, long: null });
    const [isLightToggle, setIsLightToggle] = useState(true);

    const onChangeHandler = (e) => {

        const addressInput = e.properties.address_line1;
        setAddress(addressInput);

    }

    const fetchCoordinates = async () => {
        try {

            const response = await getCoordinates(address);
            const lat_coordinates = response.results[0].lat;
            const long_coordinates = response.results[0].lon;

            setCoordinates((prev) => ({
                ...prev,
                lat: lat_coordinates,
                long: long_coordinates
            }));

        } catch (error) {
            console.error(`Geocoding Error: ${error}`);
        }
    }

    const submitHandler = async () => {
        const checkAddress = address && await fetchCoordinates();

        return checkAddress;
    }

    useEffect(() => {
        if (coordinates.lat && coordinates.long) {
            fetchWeatherForecast(coordinates.lat, coordinates.long);
        }
    }, [coordinates]);
    
    const toggleSwitchHandler = () => {
        setIsLightToggle(!isLightToggle);
    }
    
    useEffect(() => {
        setTheme(isLightToggle ? 'Light': 'Dark');
    }, [isLightToggle]); 

    // console.log(test);
    // console.log(address);
    // console.log(coordinates);
    console.log(currentWeather);
    console.log(hourlyWeather);
    console.log(dailyWeather);
    console.log(isLightToggle);
    console.log(theme);
    
    
    
    return (
      <>
        <WeatherHeaderContainer>
            <SwitchContainer onClick={toggleSwitchHandler}>
                <MaterialUISwitch />
                <label style={{color: isLightToggle ? 'black' : 'white'}}>{theme} Mode</label>
            </SwitchContainer>
            <AddressInputContainer theme={theme}>
                <AddressAutocomplete onChange={onChangeHandler}/>
                <button type="submit" onClick={submitHandler}>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></span>
                </button>
            </AddressInputContainer>
            <CurrentLocationButton />
        </WeatherHeaderContainer>
      </>  
    );
}

export default WeatherHeader;