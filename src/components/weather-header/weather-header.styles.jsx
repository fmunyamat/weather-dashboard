import styled from "styled-components";

export const WeatherHeaderContainer = styled.div
`
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    height: 80px;

    > *:first-child {  /* Targets the first direct child */
        margin-left: 5vw;
    }

    > *:last-child {  /* Targets CLButtonContainer */
        margin-right: 5vw;
    }
`;

export const SwitchContainer = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;


export const AddressInputContainer = styled.div
`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    input, button {
        background-color: ${(props) => (props.theme === "Light" ? "#d9d9d9" : "#444444")};
    }

    input {
        height: ${(props) => (props.theme === "Light" ? "97.5%;" : "100%")};
        width: 40vw;
        padding: 0;
        border-radius: 40px 0 0px 40px;
        border: ${(props) => (props.theme === "Light" ? "1px solid black;" : "none")};
        ${(props) => (props.theme === "Light" ? "border-right: none;" : "")};
        text-indent: 10px;
        color: ${(props) => (props.theme === "Dark" && "white")};

        &::placeholder {
            color: ${(props) => (props.theme === "Light" ? "#878787" : "#b7b7b7")};
        }
    }

        svg {
            color: ${(props) => (props.theme === "Light" ? "#878787" : "#b7b7b7")};
            font-size: 25px;
        }
    }
`;

export const AutocompleteContainer = styled.div
`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 150%;
`;

export const SubmitButtonContainer = styled.div
`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 50%
`;

export const SubmitButton = styled.button
`
    position: relative;
    z-index: 1;
    height: 100%;
    width: 60px;
    border-radius: 0 40px 40px 0;
    border: ${(props) => (props.theme === "Light" ? "1px solid black;" : "none")};
    ${(props) => (props.theme === "Light" ? "border-left: none;" : "")};
    cursor: pointer;
`;

export const CLButtonContainer = styled.div
`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 2;
`;