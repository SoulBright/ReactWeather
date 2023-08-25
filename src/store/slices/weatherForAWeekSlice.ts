import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { WeatherForAWeekType } from '../types/types';

type WeatherForAWeek = {
  weatherForAWeek: WeatherForAWeekType;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: WeatherForAWeek = {
  weatherForAWeek: {
    main: {
      temp_min: 0,
      temp_max: 0,
    },
    weather: [],
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const weatherForAWeekSlice = createSlice({
  name: 'Weather-for-a-week',
  initialState,
  reducers: {
    fetchWeatherForAWeek(state) {
      state.isLoading = true;
    },

    fetchWeatherForAWeekSuccess(
      state,
      action: PayloadAction<AxiosResponse<WeatherForAWeekType>>
    ) {
      state.isLoading = false;
      state.weatherForAWeek = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchWeatherForAWeekError(
      state,
      action: PayloadAction<AxiosResponse<WeatherForAWeekType>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default weatherForAWeekSlice.reducer;