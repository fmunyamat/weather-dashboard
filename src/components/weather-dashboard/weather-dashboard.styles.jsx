import styled from "styled-components";

export const DashboardBody = styled.div
`
  width: 100%;
  height: 100vh;

  &.light-mode {
    background-image: linear-gradient(to right, #f1f4f3, #686f74)
  }

  &.dark-mode {
    background-image: linear-gradient(to right, #404040, #1e1e1e)
  }
`;