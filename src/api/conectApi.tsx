import axios from 'axios';

export const baseURL = 'https://community-open-weather-map.p.rapidapi.com';
export const key = 'e8dd825a38mshd2cd34d2743ed92p1d9791jsn3eb4bfade84e';

export const conectApi = axios.create({ baseURL });