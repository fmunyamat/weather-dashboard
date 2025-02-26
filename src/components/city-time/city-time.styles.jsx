import styled from "styled-components";

export const CityTimeContainer = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    border-radius: 20px;
    box-shadow: 9px 9px 5px rgba(0, 0, 0, 0.3);
    height: 330px;
    width: 40vw;
    background-color: ${(props) => (props.theme === "Light" ? "#d9d9d9" : "#444444")};
`;

export const City = styled.span
`
    margin-top: -30px;
    font-size: 35px;
    font-weight: 700;
    color: ${(props) => (props.theme === "Light" ? "#3c3c3c" : "white")};
`;

export const CurrentTime = styled.span
`
        margin-top: 20px;
        font-size: 50px;
        font-weight: 700;
    color: ${(props) => (props.theme === "Light" ? "#3c3c3c" : "white")}
`;

export const CurrentDate = styled.span
`
    font-size: 20px;
    color: ${(props) => (props.theme === "Light" ? "#3c3c3c" : "white")}
`;