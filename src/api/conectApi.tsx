import axios from 'axios';

export const baseURL = 'https://community-open-weather-map.p.rapidapi.com';
export const key = '20e2c3eb2amsh662669d3d2bf9fep19af9cjsn552378143119';

export const conectApi = axios.create({ baseURL });