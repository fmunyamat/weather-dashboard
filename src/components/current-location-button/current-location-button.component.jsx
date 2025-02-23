import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { CLButton } from "./current-location-button.styles";

const CurrentLocationButton = () => {
    return (
        <>
            <CLButton>
                <span><FontAwesomeIcon icon={faCrosshairs} /></span>
                <span>Current Location</span>
            </CLButton>
        </>
    );
};

export default CurrentLocationButton;