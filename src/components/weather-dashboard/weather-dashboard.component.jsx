import WeatherHeader from "../weather-header/weather-header.component";
import WeatherBody from "../weather-body/weather-body.component";
import { useContext } from "react";
import { DashboardThemeContext } from "../../contexts/dashboard-theme.context";
import { DashboardBody } from "./weather-dashboard.styles";

const WeatherDashboard = () => {
  const { theme } = useContext(DashboardThemeContext);

    return (
      <>
        <DashboardBody className={`${theme.toLowerCase()}-mode`}>
          <WeatherHeader />
          <WeatherBody />
        </DashboardBody>
      </>
    );
};

export default WeatherDashboard;