export const themeSelect = (darkTheme, lightTheme) => (
    (props) => (props.isDarkMode ? darkTheme : lightTheme)
);