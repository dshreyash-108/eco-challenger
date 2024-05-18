import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AirQuality = () => {
    const [aqiData, setAqiData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    // Replace with your actual API key
    const apiKey = '87b40c279135db237d1ba5e5db22ea38';

    // Function to fetch AQI data
    const fetchAqiData = async () => {
        try {
            // Get user's geolocation (optional)
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    const apiUrl = `https://api.openweathermap.org/data/2.5/air/pollution?lat=<span class="math-inline">\{lat\}&lon\=</span>{lon}&appid=${apiKey}`;
                    fetchData(apiUrl);
                },
                (error) => {
                    setErrorMessage('Geolocation permission denied or unavailable.');
                }
            );

            // Fallback: Use default coordinates (replace with your desired location)
            const defaultLat = 37.7749; // New York City (example)
            const defaultLon = -122.4194;
            const apiUrl = `https://api.openweathermap.org/data/2.5/air/pollution?lat=<span class="math-inline">\{defaultLat\}&lon\=</span>{defaultLon}&appid=${apiKey}`;
            fetchData(apiUrl);
        } catch (error) {
            setErrorMessage('Error fetching AQI data.');
            console.error(error);
        }
    };

    // Helper function to make the actual API call
    const fetchData = async (url) => {
        const response = await axios.get(url);
        setAqiData(response.data);
    };

    // Fetch data on component mount
    useEffect(() => {
        fetchAqiData();
    }, []);

    return (
        <div>
            {aqiData ? (
                <div>
                    <h2>Air Quality Index (AQI): {aqiData.main.aqi}</h2>
                    {/* Add more details based on your API response structure */}
                    <p>Additional Details: (to be implemented)</p>
                </div>
            ) : (
                <div>
                    {errorMessage ? (
                        <p>Error: {errorMessage}</p>
                    ) : (
                        <p>Loading AQI data...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AirQuality;
