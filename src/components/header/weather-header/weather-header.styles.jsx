import { themeSelect } from "../../../constants/weather-dashboard-theme";
import styled from "styled-components";

export const WeatherHeaderContainer = styled.div
`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    margin: 0 30px;
    height: 80px;
`;

export const SwitchContainer = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 300px;
`;


export const AddressInputContainer = styled.div
`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 800px;

    input, button {
        background-color: ${themeSelect("#444444", "#d9d9d9")};
    }

    input {
        height: ${themeSelect("100%", "97.5%;")};
        width: 550px;
        padding: 0;
        border-radius: 40px 0 0px 40px;
        border: ${themeSelect("none", "1px solid black;")};
        ${themeSelect("", "border-right: none" )};
        text-indent: 10px;
        color: ${(props) => (props.$isDarkMode && "white")};

        &::placeholder {
            color: ${themeSelect("#b7b7b7", "#878787")};
        }
    }

        svg {
            color: ${themeSelect("#b7b7b7", "#878787")};
            font-size: 25px;
        }
    }
`;

export const AutocompleteContainer = styled.div
`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 500px;
    position: relative;
    z-index: 2;
`;

export const SubmitButtonContainer = styled.div
`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100px;
`;

export const SubmitButton = styled.button
`
    position: relative;
    z-index: 1;
    height: 100%;
    width: 60px;
    border-radius: 0 40px 40px 0;
    border: ${themeSelect("none", "1px solid black")};
    ${(props) => (props.$isDarkMode ? "" : "border-left: none")};
    cursor: pointer;
`;

export const CLButtonContainer = styled.div
`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 200px;
    position: relative;
    z-index: 2;
`;