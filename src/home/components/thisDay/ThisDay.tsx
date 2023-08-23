import React from 'react'

import s from './ThisDay.module.scss'

export default function ThisDay() {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.this__temp}>20°</div>
                <div className={s.this__day_name}>Сегодня</div>
            </div>
            <div className={s.buttom__block}>
                <div className={s.this__time}>
                    Время: <span>15:35</span>
                </div>
                <div className={s.this__city}>
                    Город: <span>Новороссийск</span>
                </div>
            </div>
        </div>
    )
}
