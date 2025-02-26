import { useContext, useState, useEffect } from "react";
import { LocationContext } from "../../contexts/location.context";
import { getAddress } from "../../utils/apis/geocode-api.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { CLButton } from "./current-location-button.styles";

const CurrentLocationButton = () => {
    const { coordinates, setCoordinates, setAddress } = useContext(LocationContext);
    const [currentLocation, setCurrentLocation] = useState({});
    const [isCLButtonClicked, setIsCLButtonClicked] = useState(false)

    const getCurrentLocation = () => {
        setIsCLButtonClicked(true);
        setAddress('');

        if (navigator.geolocation) {

          navigator.geolocation.getCurrentPosition((location) => {
            const { latitude, longitude } = location.coords;
            setCoordinates({ lat: latitude, long: longitude });
          },
          (error) => {
            console.error("Error fetching location:", error);
          });

        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      };

      useEffect(() => {

        if (isCLButtonClicked && coordinates.lat != null && coordinates.long != null) {

          const fetchAddressData = async () => {
            
            const response = await getAddress(coordinates.lat, coordinates.long);
            setCurrentLocation(response);
            setIsCLButtonClicked(false)
          }

          fetchAddressData();
        }
      }, [coordinates]);
      
      console.log('Current Location: ', currentLocation);
      
    return (
        <>
            <CLButton onClick={getCurrentLocation}>
                <span><FontAwesomeIcon icon={faCrosshairs} /></span>
                <span>Current Location</span>
            </CLButton>
        </>
    );
};

export default CurrentLocationButton;