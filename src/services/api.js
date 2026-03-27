import axios from 'axios';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4a5caeb8bbfa8da721ce2e6ee30372d5';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country.toUpperCase()}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api', error.message);
        return error.response;
    }
}