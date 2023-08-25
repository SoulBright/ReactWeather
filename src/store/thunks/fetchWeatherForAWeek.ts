import { WeatherService } from '../../secrvices/WeatherService';
import { weatherForAWeekSlice } from '../slices/weatherForAWeekSlice';
import { AppDispatch } from '../store';

export const fetchWeatherForAWeek =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(weatherForAWeekSlice.actions.fetchWeatherForAWeek());
      const res = await WeatherService.getWeatherForAWeek(payload);
      if (res.status === 200) {
        dispatch(weatherForAWeekSlice.actions.fetchWeatherForAWeekSuccess(res));
      } else {
        dispatch(weatherForAWeekSlice.actions.fetchWeatherForAWeekError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };