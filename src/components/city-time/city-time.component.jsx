import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { DashboardThemeContext } from '../../contexts/dashboard-theme.context';
import { LocationContext } from '../../contexts/location.context.jsx';
import { CityTimeContainer, City, CurrentTime, CurrentDate } from './city-time.styles.jsx';
import './city-time.styles.jsx';

const CityTime = () => {
    const { theme } = useContext(DashboardThemeContext);
    const { displayCityText } = useContext(LocationContext);
    const currentDate = new Date();
    const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        // Convert hours to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        setCurrentTime(`${hours}:${minutes} ${ampm}`);
      }, 60000); // Update every minute
  
      // Initial set to avoid delay on load
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      // Convert hours to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      
      setCurrentTime(`${hours}:${minutes} ${ampm}`);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }); 

    console.log(formattedDate);
    
    return (
        <>
            <CityTimeContainer theme={theme}>
                <City theme={theme}>{displayCityText}</City>
                <CurrentTime theme={theme}>{currentTime}</CurrentTime>
                <CurrentDate theme={theme}>{formattedDate}</CurrentDate>
            </CityTimeContainer>
        </>
    );
};

export default CityTime;