import React, { useState, useEffect } from 'react';
import { Weather } from '../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
  weather: Weather;
}

export default function ThisDay({ weather }: Props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.this__temp}>{Math.round(weather.main.temp)}°</div>
        <div className={s.this__day_name}>{weather.weather[0]?.description}</div>
      </div>
      <div className={s.buttom__block}>
        <div className={s.this__time}>
          Время: <span>{currentTime.toLocaleTimeString()}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
}
