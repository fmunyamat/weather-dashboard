export const themeSelect = (darkTheme, lightTheme) => {
    return ({ $isDarkMode }) => ($isDarkMode ? darkTheme : lightTheme);
};

export const themeColors = ({
    // Global
    lightBg: '#d9d9d9',
    darkBg: '#444444',
    lightText: '#3c3c3c',
    darkText: 'white'
});