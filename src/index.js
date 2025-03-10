import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WeatherDataProvider } from './contexts/weather-data.context';
import { DashboardThemeProvider } from './contexts/dashboard-theme.context';
import { LocationProvider } from './contexts/location.context';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocationProvider>
        <DashboardThemeProvider>
          <WeatherDataProvider>
            <App />
          </WeatherDataProvider>
        </DashboardThemeProvider>
      </LocationProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
