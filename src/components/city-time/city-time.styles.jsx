import styled from "styled-components";
import { themeSelect } from "../../constants/weather-dashboard-theme";

export const CityTimeContainer = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    border-radius: 20px;
    box-shadow: 9px 9px 5px rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 400px;
    background-color: ${themeSelect("#444444", "#d9d9d9")};
`;

export const City = styled.span
`
    margin-top: -30px;
    font-size: 35px;
    font-weight: 700;
    color: ${themeSelect("white", "#3c3c3c")};
`;

export const CurrentTime = styled.span
`
        margin-top: 20px;
        font-size: 50px;
        font-weight: 700;
    color: ${themeSelect("white", "#3c3c3c")}
`;

export const CurrentDate = styled.span
`
    font-size: 20px;
    color: ${themeSelect("white", "#3c3c3c")}
`;