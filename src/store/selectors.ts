import { RootState } from './store';

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;

  export const selectWeatherForAWeekData = (state: RootState) =>
  state.weatherForAWeekSliceReducer;