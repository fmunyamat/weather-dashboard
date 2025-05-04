import { useContext } from "react";
import { useSelector } from "react-redux";

import { selectFullWeather } from "../../store/weather/weather.selector";
import { DashboardThemeContext } from "../../contexts/dashboard-theme.context";

import WeatherHeader from "../header/weather-header/weather-header.component";
import WeatherBody from "../body/weather-body/weather-body.component";
import AlertBanner from "../footer/alert-banner/alert-banner.component";

import { DashboardBody } from "./weather-dashboard.styles";

const WeatherDashboard = () => {
  const { isDarkMode } = useContext(DashboardThemeContext);
  const fullWeather = useSelector(selectFullWeather);

    return (
      <>
        <DashboardBody $isDarkMode={isDarkMode}>
          <WeatherHeader />
          <WeatherBody />
          <AlertBanner alerts={fullWeather.alerts} />
        </DashboardBody>
      </>
    );
};

export default WeatherDashboard;