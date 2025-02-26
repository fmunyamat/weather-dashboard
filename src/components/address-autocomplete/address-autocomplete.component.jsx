import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

const AddressAutocomplete = ({ onChange, value, onInputChange }) => {
    const apiKey = process.env.REACT_APP_GEOAPIFY_GEOCODE_API_KEY
     
    return (
        <>
            <GeoapifyContext apiKey={apiKey}>
                <GeoapifyGeocoderAutocomplete
                    placeholder="Enter address, postal code, or city & state"
                    placeSelect={onChange}
                    value={value} // Pass the input value from the parent
                    onChange={(e) => onInputChange(e.target.value)} // Handle typing
                />
            </GeoapifyContext>
        </>
    )
};

export default AddressAutocomplete;