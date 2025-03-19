import styled, { css } from "styled-components";
import { themeColors, themeSelect } from "../../../constants/weather-dashboard-theme";
import HorizontalScrollingContainer from "../../global/scrolling-container/horizontal-scrolling-container.component";
import {ReactComponent as DegreeIcon } from "../../../assets/weather-icons/arrow.svg";

const hourlyInfoTextTheme = css
`
    font-weight: 700;
    color: ${themeSelect(themeColors.darkText, themeColors.lightText)};
`;

export const HourlyForecastContainer = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 650px;
    margin-right: 30px;
    border-radius: 20px;
    box-shadow: 9px 9px 5px rgba(0, 0, 0, 0.3);
    background-color: ${themeSelect(themeColors.darkBg, themeColors.lightBg)};
`;

export const ForecastTitle = styled.span
`
    margin-top: 20px;
    font-size: 2rem;
    font-weight: 700;
    color: ${themeSelect(themeColors.darkText, themeColors.lightText)};
`;

export const HourlyWeatherButtonGroup = styled.div
`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const ArrowWrapper = styled.div`
  color: ${themeSelect(themeColors.darkText, themeColors.lightText)};
  cursor: pointer;
  
  svg {
    transform: scale(2.5);
  }
`;

export const HoScrollingContainer = styled(HorizontalScrollingContainer)
`
    display: flex;
    gap: 30px;
    width: 470px;
    height: 265px;
    margin-left: 20px;
`;

export const HourlyDataGroup = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 90px;
    scroll-snap-align: start;
    width: 90px;
    height: 250px;
    background: linear-gradient(to bottom, #ffa34e, #e4d7be);
    border-radius: 20px;
    box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.3);
`;

export const DateTime = styled.span`${hourlyInfoTextTheme}};`;
export const Temp = styled.span`${hourlyInfoTextTheme}};`;
export const WindSpeed = styled.span`${hourlyInfoTextTheme}};`;

export const HourlyInfo = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DegreeArrow = styled(DegreeIcon)
`
    filter: invert(24%) sepia(86%) saturate(1913%) hue-rotate(186deg) brightness(95%) contrast(92%);
    cursor: default;
`;