import React from 'react'

import Card from './Card';
import { WeatherForAWeekType } from '../../../store/types/types';

import s from './Days.module.scss'

export interface Day {
    day: string;
    day_info: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

interface Props {
    weather: WeatherForAWeekType;
  }

  export default function Days({ weather }: Props) {
    const currentDate = new Date();
    const currentDayOfWeek = (currentDate.getDay() - 1 + 7) % 7;

    const days: Day[] = [
        {
            day: getDayOfWeek(currentDayOfWeek + 1),
            day_info: currentDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: getDayOfWeek(currentDayOfWeek + 2),
            day_info: getDayInfo(currentDayOfWeek - 3),
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            day: getDayOfWeek(currentDayOfWeek + 3),
            day_info: getDayInfo(currentDayOfWeek - 2),
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            day: getDayOfWeek(currentDayOfWeek + 4),
            day_info: getDayInfo(currentDayOfWeek - 1),
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: getDayOfWeek(currentDayOfWeek + 5),
            day_info: getDayInfo(currentDayOfWeek),
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];

    function getDayOfWeek(day: number): string {
        const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        return daysOfWeek[day % 7];
    }

    function getDayInfo(day: number): string {
        const nextDate = new Date();
        nextDate.setDate(currentDate.getDate() + day);
        return nextDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
    }

    return (
        <div className={s.wrapper}>
            <div className={s.week}>
                <span> Прогноз на неделю: </span>
            </div>
            <div className={s.days}>
                {days.map((day: Day) => (
                    <Card day={day} key={day.day} />
                ))}
            </div>
        </div>
    );
}