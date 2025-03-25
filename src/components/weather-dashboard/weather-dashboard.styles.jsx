import { themeSelect } from "../../constants/weather-dashboard-theme";
import styled from "styled-components";

export const DashboardBody = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden; /* Prevents horizontal scrolling */
  background-image: linear-gradient(
    to right, 
    ${themeSelect("#404040", "#f1f4f3")}, 
    ${themeSelect("#1e1e1e", "#686f74")}
  );
  
`;