import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFullWeather } from "../../../store/weather/weather.selector";
import { fetchWeatherForecast } from "../../../store/weather/weather.action";
import { DashboardThemeContext } from "../../../contexts/dashboard-theme.context";
import { LocationContext } from "../../../contexts/location.context";
import { getCoordinates } from "../../../utils/apis/geocode-api.utils";

import AddressAutocomplete from "../../global/address-autocomplete/address-autocomplete.component";
import { MaterialUISwitch } from "../material-ui-switch/material-ui-switch.component";
import CurrentLocationButton from "../current-location-button/current-location-button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import {
    WeatherHeaderContainer,
    SwitchContainer,
    AddressInputContainer,
    SubmitButton,
    CLButtonContainer,
    AutocompleteContainer,
    SubmitButtonContainer } from "./weather-header.styles";

const WeatherHeader = () => {
    const dispatch = useDispatch();
    const fullWeather = useSelector(selectFullWeather);
    const { isDarkMode, setIsDarkMode } = useContext(DashboardThemeContext);
    const { 
        coordinates,
        setCoordinates,
        addressFull,
        setAddressFull,
        addressCity,
        setAddressCity,
        setDisplayCityText
    } = useContext(LocationContext);
    const [isLightToggle, setIsLightToggle] = useState(true);

    const onChangeHandler = (e) => {

        const addressInput = e.properties.formatted;
        const addressCityInput = e.properties.city ? e.properties.city : e.properties.county;
        setAddressFull(addressInput);
        setAddressCity(addressCityInput);
        // console.log(e);
        
    }

    const  fetchCoordinates = async () => {
        try {

            const response = await getCoordinates(addressFull);
            const latCoordinates = response.results[0].lat;
            const longCoordinates = response.results[0].lon;

            setCoordinates((prev) => ({
                ...prev,
                lat: latCoordinates,
                long: longCoordinates
            }));

        } catch (error) {
            console.error(`Geocoding Error: ${error}`);
        }
    }

    const submitHandler = async () => {
        const checkAddress = addressFull && await fetchCoordinates();
        setAddressFull('');
        setDisplayCityText(addressCity);

        return checkAddress;
    }
    
    const toggleSwitchHandler = () => {
        setIsLightToggle(!isLightToggle);
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        if (coordinates.lat && coordinates.long) {
            dispatch(fetchWeatherForecast(coordinates.lat, coordinates.long));
        }
    }, [coordinates]);

    // console.log(test);
    // console.log(addressFull);
    // console.log(coordinates);
    console.log(fullWeather);
    // console.log(currentWeather);
    // console.log(hourlyWeather);
    // console.log(dailyWeather);
    // console.log(isLightToggle);
    // console.log(isDarkMode);
    
    
    
    return (
      <>
        <WeatherHeaderContainer>
            <SwitchContainer>
                <MaterialUISwitch onClick={toggleSwitchHandler} />
                <label style={{color: isLightToggle ? 'black' : 'white'}}>{isDarkMode ? "Dark" : "Light"} Mode</label>
            </SwitchContainer>
            <AddressInputContainer $isDarkMode={isDarkMode}>
                <AutocompleteContainer>
                    <AddressAutocomplete
                        onChange={onChangeHandler}
                        value={addressFull} 
                        onInputChange={setAddressFull}
                    />
                </AutocompleteContainer>
                <SubmitButtonContainer>
                    <SubmitButton $isDarkMode={isDarkMode} type="submit" onClick={submitHandler}>
                        <span><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></span>
                    </SubmitButton>
                </SubmitButtonContainer>
            </AddressInputContainer>
            <CLButtonContainer>
                <CurrentLocationButton />
            </CLButtonContainer>
        </WeatherHeaderContainer>
      </>  
    );
}

export default WeatherHeader;