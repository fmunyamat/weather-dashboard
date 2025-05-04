import { createContext, useState } from "react";

export const LocationContext = createContext({
    coordinates: { lat: null, long: null },
    setCoordinates: () => null,
    addressFull: null,
    setAddressFull: () => null,
    addressCity: null,
    setAddressCity: () => null,
    displayCityText: '---',
    setDisplayCityText: () => null
});


export const LocationProvider = ({ children }) => {
    const [coordinates, setCoordinates] = useState({ lat: null, long: null });
    const [addressFull, setAddressFull] = useState(null);
    const [addressCity, setAddressCity] = useState(null);
    const [displayCityText, setDisplayCityText] = useState('---');

    const value = { coordinates, setCoordinates, addressFull, setAddressFull, addressCity, setAddressCity, displayCityText, setDisplayCityText };

    return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
};