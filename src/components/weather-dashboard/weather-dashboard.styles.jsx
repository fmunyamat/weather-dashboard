import styled from "styled-components";

export const DashboardBody = styled.div
`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden; /* Prevents horizontal scrolling */

  &.light-mode {
    background-image: linear-gradient(to right, #f1f4f3, #686f74);
  }

  &.dark-mode {
    background-image: linear-gradient(to right, #404040, #1e1e1e);
  }
`;