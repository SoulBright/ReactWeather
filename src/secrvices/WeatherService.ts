import { AxiosResponse } from 'axios';
import api from '../axios';
import { Weather, WeatherForAWeekType } from '../store/types/types';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  };
  static getWeatherForAWeek(city: string): Promise<AxiosResponse<WeatherForAWeekType>> {
    return api.get<WeatherForAWeekType>(`/forecast?q=${city}`);
  };
}