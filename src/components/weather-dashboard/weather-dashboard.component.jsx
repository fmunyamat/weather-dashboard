import { useContext } from "react";
import { DashboardThemeContext } from "../../contexts/dashboard-theme.context";
import WeatherHeader from "../header/weather-header/weather-header.component";
import WeatherBody from "../body/weather-body/weather-body.component";
import { DashboardBody } from "./weather-dashboard.styles";

const WeatherDashboard = () => {
  const { isDarkMode } = useContext(DashboardThemeContext);

    return (
      <>
        <DashboardBody $isDarkMode={isDarkMode}>
          <WeatherHeader />
          <WeatherBody />
        </DashboardBody>
      </>
    );
};

export default WeatherDashboard;