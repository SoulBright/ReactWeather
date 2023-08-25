import React from 'react'

import ThisDayItem from './ThisDayItem';
import s from './ThisDayInfo.module.scss'

import { Weather } from '../../../store/types/types'

export interface Item {
    name: string;
    value: string;
}

interface Props {
    weather: Weather;
}


export default function ThisDayInfo({weather}: Props) {
    const items = [
        {
            name: 'Температура:',
            value: `${Math.round(weather.main.temp)}° - ощущается как ${Math.round(weather.main.feels_like)}°`,
        },
        {
            name: 'Давление:',
            value: `${Math.round(weather.main.pressure)} мм ртутного столба`,
        },
        {
            name: 'Влажность:',
            value: `${Math.round(weather.main.humidity)} %`,
        },
        {
            name: 'Ветер:',
            value: `${Math.round(weather.wind.speed)} м/с`,
        },
    ];
    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem key={item.name} item={item} />
                ))}
            </div>
            <img className={s.cloud} src={process.env.PUBLIC_URL + '/images/cloud.png'} alt='Облако' />
        </div>
    );
};