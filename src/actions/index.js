import axios from 'axios';

const API_KEY = '3ee0b1a790c513f119f0b5b77e7837b3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// This line is to ensure that between action and reducers are referencing the same variable; it's of common usage.

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
