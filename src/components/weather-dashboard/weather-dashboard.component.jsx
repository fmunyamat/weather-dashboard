import { useContext } from "react";
import { DashboardThemeContext } from "../../contexts/dashboard-theme.context";
import { WeatherDataContext } from "../../contexts/weather-data.context";
import WeatherHeader from "../header/weather-header/weather-header.component";
import WeatherBody from "../body/weather-body/weather-body.component";
import AlertBanner from "../footer/alert-banner/alert-banner.component";
import { DashboardBody } from "./weather-dashboard.styles";

const WeatherDashboard = () => {
  const { isDarkMode } = useContext(DashboardThemeContext);
  const { fullWeather } = useContext(WeatherDataContext);

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