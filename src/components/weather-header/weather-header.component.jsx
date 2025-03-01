import { useContext, useEffect, useState } from "react";
import { DashboardThemeContext } from "../../contexts/dashboard-theme.context";
import { WeatherDataContext } from "../../contexts/weather-data.context";
import { LocationContext } from "../../contexts/location.context";
import { getCoordinates } from "../../utils/apis/geocode-api.utils";
import AddressAutocomplete from "../address-autocomplete/address-autocomplete.component";
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
    const { fullWeather, currentWeather, hourlyWeather, dailyWeather, fetchWeatherForecast } = useContext(WeatherDataContext);
    const { theme, setTheme } = useContext(DashboardThemeContext);
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

        const addressInput = e.properties.address_line1;
        const addressCityInput = e.properties.city;
        setAddressFull(addressInput);
        setAddressCity(addressCityInput);
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
    }

    useEffect(() => {
        if (coordinates.lat && coordinates.long) {
            fetchWeatherForecast(coordinates.lat, coordinates.long);
        }
    }, [coordinates]);
    
    useEffect(() => {
        setTheme(isLightToggle ? 'Light': 'Dark');
    }, [isLightToggle]); 

    // console.log(test);
    // console.log(addressFull);
    // console.log(coordinates);
    console.log(fullWeather);
    // console.log(currentWeather);
    // console.log(hourlyWeather);
    // console.log(dailyWeather);
    // console.log(isLightToggle);
    // console.log(theme);
    
    
    
    return (
      <>
        <WeatherHeaderContainer>
            <SwitchContainer>
                <MaterialUISwitch onClick={toggleSwitchHandler} />
                <label style={{color: isLightToggle ? 'black' : 'white'}}>{theme} Mode</label>
            </SwitchContainer>
            <AddressInputContainer theme={theme}>
                <AutocompleteContainer>
                    <AddressAutocomplete
                        onChange={onChangeHandler}
                        value={addressFull} 
                        onInputChange={setAddressFull}
                    />
                </AutocompleteContainer>
                <SubmitButtonContainer>
                    <SubmitButton theme={theme} type="submit" onClick={submitHandler}>
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