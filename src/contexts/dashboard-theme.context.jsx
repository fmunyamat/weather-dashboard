import { createContext, useState } from "react";

export const DashboardThemeContext = createContext({
    isDarkMode: false,
    setIsDarkMode: () => null
});


export const DashboardThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const value = { isDarkMode, setIsDarkMode };

    return <DashboardThemeContext.Provider value={value}>{ children }</DashboardThemeContext.Provider>
};