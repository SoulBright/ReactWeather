export type Weather = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  },
  wind: {
    speed: number;
  },
  weather: {
    description: string;
  }[];
};

export type WeatherForAWeekType = {
  main: {
    temp_min: number;
    temp_max: number;
  },
  weather: {
    description: string;
  }[];
};