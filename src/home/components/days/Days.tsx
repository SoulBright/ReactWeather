import React from 'react'

import Card from './Card';

import s from './Days.module.scss'

export interface Day {
    day: string;
    day_info: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export default function Days() {
    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            day: 'Ср',
            day_info: '30 авг',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            day: 'Чт',
            day_info: '28 авг',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            day_info: '28 авг',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Сб',
            day_info: '28 авг',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Вс',
            day_info: '28 авг',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ]

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
    )
}
