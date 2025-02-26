const apiKey = process.env.REACT_APP_GEOAPIFY_GEOCODE_API_KEY;  

export const getCoordinates = async (address) => {
    const baseUrl = 'https://api.geoapify.com/v1/geocode/search?text=';
    
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

export const getAddress = async (lat, long) => {
    const baseUrl = 'https://api.geoapify.com/v1/geocode/reverse?'

    try {
        const fullUrl = `${baseUrl}lat=${lat}&lon=${long}&apiKey=${apiKey}`;
        const response = await fetch(fullUrl);

        if (!response.ok) {
            const errorText = await response.text(); // ✅ Await the text response
            console.error('Geocode API Error:', errorText);
            throw new Error(`Failed to fetch address data: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
}