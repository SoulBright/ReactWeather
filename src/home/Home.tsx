import React, { useEffect } from 'react';

import s from './Home.module.scss';
import Header from './components/header/Header';
import ThisDay from './components/thisDay/ThisDay';
import ThisDayInfo from './components/thisDayInfo/ThisDayInfo';
import Days from './components/days/Days';
import { useCustomDispatch, useCustomSelector } from '../hooks/store';
import { fetchCurrentWeather } from '../store/thunks/fetchCurrentWeather';
import { fetchWeatherForAWeek } from '../store/thunks/fetchWeatherForAWeek'
import { selectCurrentWeatherData, selectWeatherForAWeekData } from '../store/selectors';

export default function Home() {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { weatherForAWeek } = useCustomSelector(selectWeatherForAWeekData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('anapa'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchWeatherForAWeek('anapa'));
  }, [dispatch]);

  const handleCityChange = (city: string) => {
    dispatch(fetchCurrentWeather(city));
    dispatch(fetchWeatherForAWeek(city));
  };


  return (
    <div className={s.home}>
      <Header onCityChange={handleCityChange} />
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather}/>
      </div>
      <Days weather={weatherForAWeek}/>
    </div>
  );
}
