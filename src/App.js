import { Routes, Route } from "react-router-dom";
import WeatherDashboard from "./components/weather-dashboard/weather-dashboard.component";

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<WeatherDashboard />} />
    </Routes>
  );
};

export default App;
