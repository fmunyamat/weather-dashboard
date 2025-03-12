import WeatherHeader from "../weather-header/weather-header.component";
import WeatherBody from "../weather-body/weather-body.component";
import { useContext } from "react";
import { DashboardThemeContext } from "../../contexts/dashboard-theme.context";
import { DashboardBody } from "./weather-dashboard.styles";

const WeatherDashboard = () => {
  const { isDarkMode } = useContext(DashboardThemeContext);

    return (
      <>
        <DashboardBody isDarkMode={isDarkMode}>
          <WeatherHeader />
          <WeatherBody />
        </DashboardBody>
      </>
    );
};

export default WeatherDashboard;