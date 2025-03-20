import styled from "styled-components";
import { themeColors, themeSelect } from "../../../constants/weather-dashboard-theme";

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
    background-color: ${themeSelect(themeColors.darkBg, themeColors.lightBg)};
`;

export const City = styled.span
`
    margin-top: -30px;
    font-size: 35px;
    font-weight: 700;
    color: ${themeSelect(themeColors.darkText, themeColors.lightText)};
`;

export const CurrentTime = styled.span
`
        margin-top: 20px;
        font-size: 50px;
        font-weight: 700;
    color: ${themeSelect(themeColors.darkText, themeColors.lightText)}
`;

export const CurrentDate = styled.span
`
    font-size: 20px;
    color: ${themeSelect(themeColors.darkText, themeColors.lightText)}
`;