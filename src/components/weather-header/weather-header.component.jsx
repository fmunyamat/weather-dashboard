import { useContext, useEffect, useState } from "react";
import { WeatherDataContext } from "../../contexts/weather-data.context";
import { getCoordinates } from "../../utils/apis/geocode-api.utils";
import AddressAutocomplete from "../address-autocomplete/address-autocomplete.component";
import { MaterialUISwitch } from "../material-ui-switch/material-ui-switch.component";
import CurrentLocationButton from "../current-location-button/current-location-button.component";
import './weather-header.styles.scss';

const WeatherHeader = () => {
    const { currentWeather, hourlyWeather, dailyWeather, fetchWeatherForecast } = useContext(WeatherDataContext);
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({ lat: null, long: null });

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

    const submitHandler = async (e) => {
        e.preventDefault();
        await fetchCoordinates();
    }

    useEffect(() => {
        if (coordinates.lat && coordinates.long) {
            fetchWeatherForecast(coordinates.lat, coordinates.long);
        }
    }, [coordinates]);

    // console.log(test);
    // console.log(address);
    // console.log(coordinates);
    console.log(currentWeather);
    console.log(hourlyWeather);
    console.log(dailyWeather);
    
    return (
      <>
        <div className="weather-header-container">
            <div className="switch-container">
                <MaterialUISwitch />
                <label>Dark Mode</label>
            </div>
            <div className="address-input-container">
                <AddressAutocomplete onChange={onChangeHandler}/>
                <button type="submit" onClick={submitHandler}>Search</button>
            </div>
            <CurrentLocationButton />
        </div>
      </>  
    );
}

export default WeatherHeader;