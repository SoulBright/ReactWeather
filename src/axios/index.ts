import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(config => {
  config.url =
    config.url + '&units=metric&lang=ru&appid=57a90a8fcac701e57c9c008de996f569';
  return config;
});

export default api;