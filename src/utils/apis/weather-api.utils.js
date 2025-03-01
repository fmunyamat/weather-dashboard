const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall?';
const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export const fetchWeatherData = async (lat, long) => {
    try {

        const response = await fetch(`${baseUrl}lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`);

        if (!response.ok) {
            const errorText = await response.text(); // ✅ Await the text response
            console.error('Weather API Error:', errorText);
            throw new Error(`Failed to fetch weather data: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
};