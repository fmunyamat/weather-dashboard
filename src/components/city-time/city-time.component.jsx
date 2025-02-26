import { useContext } from 'react';
import { DashboardThemeContext } from '../../contexts/dashboard-theme.context';
import { CityTimeContainer, City, Time, Date } from './city-time.styles.jsx';
import './city-time.styles.jsx';

const CityTime = () => {
    const { theme } = useContext(DashboardThemeContext);
    return (
        <>
            <CityTimeContainer theme={theme}>
                <City theme={theme}>Athens</City>
                <Time theme={theme}>09:03</Time>
                <Date theme={theme}>August 31, 2024</Date>
            </CityTimeContainer>
        </>
    );
};

export default CityTime;