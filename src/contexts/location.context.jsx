import { createContext, useState } from "react";

export const LocationContext = createContext({
    coordinates: {lat: null, long: null},
    setCoordinates: () => null,
    address: null,
    setAddress: () => null
});


export const LocationProvider = ({ children }) => {
    const [coordinates, setCoordinates] = useState({lat: null, long: null});
    const [address, setAddress] = useState(null);

    const value = { coordinates, setCoordinates, address, setAddress };

    return <LocationContext.Provider value={value}>{ children }</LocationContext.Provider>
};