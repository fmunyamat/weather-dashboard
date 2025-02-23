import { createContext, useState } from "react";

export const DashboardThemeContext = createContext({
    theme: 'Light',
    setTheme: () => null
});


export const DashboardThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('Light');

    const value = { theme, setTheme };

    return <DashboardThemeContext.Provider value={value}>{ children }</DashboardThemeContext.Provider>
};