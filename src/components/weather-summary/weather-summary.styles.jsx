import { themeSelect } from "../../constants/weather-dashboard-theme";
import styled from "styled-components";

export const WeatherSummaryContainer = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 9px 9px 5px rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 900px;
    margin-left: 30px;
    background-color: ${themeSelect( "#444444", "#d9d9d9")};

    &:first-child {
        margin-left: 30px;
    }
`;

export const Summary1 = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const TempContainer = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-top: 20px;
`;

export const Temp = styled.span
`
    font-size: 50px;
    font-weight: 800;
    background: linear-gradient(90deg, ${themeSelect( "#e7e7e7, #757575)", " #323232, #9c9c9c)")};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`;

export const FeelsLikeTemp = styled.span
`
    font-size: 20px;
    margin-bottom: 20px;
    color: ${themeSelect( "#8c8c8c", "#4d4d4d")};
    font-weight: 700;
`;

export const SunriseSunsetContainer = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .sunrise, .sunset {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        img {
            width: 50px;
            filter: brightness(0) invert(1);
        }
    }

    .sunrise {
        margin-bottom: 10px;
    }

    .sunset {
        padding-bottom: 30px;
    }
`;

export const Icon = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-left: 4vw;
    filter: ${themeSelect(
        "white",
        "brightness(0) saturate(100%) invert(23%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(94%) contrast(100%)",)};
`;

export const Info = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-right: 4vw;
    color: ${themeSelect( "white", "#3c3c3c")};
    font-weight: 700;

    .sunrise-time, .sunset-time {
        font-size: 12px;
    }
`;

export const Summary2 = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    svg {
        margin-top: 80px;
        margin-bottom: 30px;
    }
`;

export const WeatherDescription = styled.span
`
    position: relative;
    z-index: 3;
    text-transform: capitalize;
    text-align: center;
    max-width: 100%;
    font-size: 2.3rem;
    font-weight: 700;
    color: ${themeSelect( "white", "#3c3c3c")};
`

export const Summary3 = styled.div
`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    height: 100%;
    width: 100%;
    
    .humidity, .wind-speed, .pressure, .uv {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .humidity, .wind-speed {
        padding-top: 25px;
    }

    .humidity, .pressure {
        padding-left: 2vw;
    }

    .wind-speed, .uv {
        padding-right: 2vw;
    }

    .pressure, .uv {
        padding-bottom: 25px;
    }
`;

export const GridIcon = styled.span
`
    img {
        width: 50px;
        filter: ${themeSelect(
            "brightness(0) invert(1)",
            "brightness(0) saturate(100%) invert(23%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(94%) contrast(100%)")};
    }
`;

export const GridNumber = styled.span
`
    font-weight: 700;
    padding-top: 10px;
    color: ${themeSelect( "white", "#3c3c3c")};
`;

export const GridCategory = styled.span
`
    padding-top: 5px;
    color: ${themeSelect( "white", "#3c3c3c",)};
`;