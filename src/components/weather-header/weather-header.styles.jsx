import styled from "styled-components";

export const WeatherHeaderContainer = styled.div
`
    display: flex;
    justify-content: space-between;
    padding-top: 50px;

    &:first-child {
        margin-left: 5vw;
    }

    button {
        margin-right: 80px;
    }
`;

export const SwitchContainer = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const AddressInputContainer = styled.div
`
    display: flex;
    padding-left: 8vw;

    input, button {
        background-color: ${(props) => (props.theme === "Light" ? "#d9d9d9" : "#444444")};
    }

    input {
        height: ${(props) => (props.theme === "Light" ? "97%;" : "100%")};
        width: 40vw;
        border-radius: 40px 0 0px 40px;
        border: ${(props) => (props.theme === "Light" ? "1px solid black;" : "none")};
        ${(props) => (props.theme === "Light" ? "border-right: none;" : "")};
        text-indent: 10px;
        color: ${(props) => (props.theme === "Dark" && "white")};

        &::placeholder {
            color: ${(props) => (props.theme === "Light" ? "#878787" : "#b7b7b7")};
        }
    }

    button {
        height: 100%;
        width: 60px;
        border-radius: 0 40px 40px 0;
        border: ${(props) => (props.theme === "Light" ? "1px solid black;" : "none")};
        ${(props) => (props.theme === "Light" ? "border-left: none;" : "")};
        cursor: pointer;

        svg {
            color: ${(props) => (props.theme === "Light" ? "#878787" : "#b7b7b7")};
            font-size: 25px;
        }
    }
`;