const baseUrl = 'https://api.geoapify.com/v1/geocode/search?text=';
const apiKey = process.env.REACT_APP_GEOAPIFY_GEOCODE_API_KEY;

export const getCoordinates = async (address) => {
    try {
        const fullUrl = `${baseUrl}${address}&format=json&api_key=${apiKey}`
        const response = await fetch(fullUrl);
        

        if (!response.ok) {
            const errorText = await response.text(); // ✅ Await the text response
            console.error('Geocode API Error:', errorText);
            throw new Error(`Failed to fetch geocode data: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
}