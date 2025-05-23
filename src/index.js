import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DashboardThemeProvider } from './contexts/dashboard-theme.context';
import { LocationProvider } from './contexts/location.context';
import { store } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <LocationProvider>
                <DashboardThemeProvider>
                    <App />
                </DashboardThemeProvider>
            </LocationProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
