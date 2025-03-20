import { themeColors, themeSelect } from "../../../constants/weather-dashboard-theme";
import styled from "styled-components";

export const DailyForecastContainer = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 650px;
    border-radius: 20px;
    box-shadow: 9px 9px 5px rgba(0, 0, 0, 0.3);
    background-color: ${themeSelect(themeColors.darkBg, themeColors.lightBg)};
`;

export const ForecastTitle = styled.span
`
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: 700;
    color: ${themeSelect(themeColors.darkText, themeColors.lightText)};
`;

export const ForecastDisplay = styled.div
`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 25px;
    margin-top: 15px;
`;

export const ForecastGroupContainer = styled.div
`
    display: flex;
    flex-direction: column;
`;

export const ForecastDateInfoContainer = styled.div
`
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 25px;
    color: ${themeSelect(themeColors.darkText, themeColors.lightText)};
    
    &:nth-last-child(-n+4) {
        margin-top: -20px;
    }
`;

export const ForecastDate = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    padding-right: 5px;
    padding-top: 13px;

    .daily-forecast-day {
        font-size: 2.5rem;
    }
`;

export const ForecastTemp = styled.div
`
    position: relative;
    z-index: 1;
    margin-top: -15px;

    .temp-max {
        font-weight: 800;
    }
`;