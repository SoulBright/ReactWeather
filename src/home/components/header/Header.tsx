import React from 'react'
import Select from 'react-select'

import s from './Header.module.scss'

export default function Header() {
const options = [
    {value: 'anapa', label: 'Анапа'},
    {value: 'тovorossiysk', label: 'Новороссийск'},
];

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            fontSize: '25px',
            zIndex: 100,
        })
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
            <img className={s.logo} src={process.env.PUBLIC_URL + '/images/logo.ico'} alt='Логотип' />
                <div className={s.title}>React weatner</div>
            </div>
            <div className={s.wrapper}>
                <Select styles={colourStyles} options={options} defaultValue={options[0]}/>
            </div>
        </header>
    )
}
