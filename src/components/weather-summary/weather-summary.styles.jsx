import styled from "styled-components";

const dynamicTheme = (lightTheme, darkTheme) => (
    (props) => (props.theme === "Light" ? lightTheme : darkTheme)
);

export const WeatherSummaryContainer = styled.div
`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    box-shadow: 9px 9px 5px rgba(0, 0, 0, 0.3);
    width: 100%;
    margin-left: 30px;
    background-color: ${dynamicTheme("#d9d9d9", "#444444")};

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
    background: ${dynamicTheme(
        "linear-gradient(90deg, #323232, #9c9c9c)",
        "linear-gradient(90deg, #e7e7e7 , #757575)")};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`;

export const FeelsLikeTemp = styled.span
`
    font-size: 20px;
    margin-bottom: 20px;
    color: ${dynamicTheme("#4d4d4d", "#8c8c8c")};
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
    filter: ${dynamicTheme(
        "brightness(0) saturate(100%) invert(23%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(94%) contrast(100%)",
        "white")};
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
    color: ${dynamicTheme("#3c3c3c", "white")};
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
    max-width: 100%;
    font-size: clamp(12px, 3vw, 45px);
    font-weight: 700;
    color: ${dynamicTheme("#3c3c3c", "white")};
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

    .pressure, .uv {
        padding-bottom: 25px;
    }
`;

export const GridIcon = styled.span
`
    img {
        width: 50px;
        filter: ${dynamicTheme(
            "brightness(0) saturate(100%) invert(23%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(94%) contrast(100%)",
            "brightness(0) invert(1)")};
    }
`;

export const GridNumber = styled.span
`
    font-weight: 700;
    padding-top: 10px;
    color: ${dynamicTheme("#3c3c3c", "white")};
`;

export const GridCategory = styled.span
`
    padding-top: 5px;
    color: ${dynamicTheme("#3c3c3c", "white")};
`;