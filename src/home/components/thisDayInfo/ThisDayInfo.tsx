import React from 'react'

import ThisDayItem from './ThisDayItem';
import s from './ThisDayInfo.module.scss'

export interface Item {
    name: string;
    value: string;
}

export default function ThisDayInfo() {
    const items = [
        {
            name: 'Температура:',
            value: '20° - ощущается как 17°',
        },
        {
            name: 'Давление:',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            name: 'Осадки:',
            value: 'Без осадков',
        },
        {
            name: 'Ветер:',
            value: '3 м/с юго-запад - легкий ветер',
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