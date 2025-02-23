import WeatherHeader from "../weather-header/weather-header.component";
import { useContext } from "react";
import { DashboardThemeContext } from "../../contexts/dashboard-theme.context";
import { DashboardBody } from "./weather-dashboard.styles";

const WeatherDashboard = () => {
  const { theme } = useContext(DashboardThemeContext);

    return (
      <>
        <DashboardBody className={`${theme.toLowerCase()}-mode`}>
          <WeatherHeader />
        </DashboardBody>
      </>
    );
};

export default WeatherDashboard;