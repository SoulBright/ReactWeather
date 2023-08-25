import React, { useState } from 'react';
import Select from 'react-select';

import s from './Header.module.scss';

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: 'anapa', label: 'Анапа' },
  { value: 'moscow', label: 'Москва' },
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
  }),
};

type HeaderProps = {
  onCityChange: (city: string) => void;
};

export default function Header({ onCityChange }: HeaderProps) {
  const [selectedCity, setSelectedCity] = useState<Option>(options[0]);

  const handleCitySelect = (selectedOption: Option | null) => {
    if (selectedOption) {
      setSelectedCity(selectedOption);
      onCityChange(selectedOption.value);
    }
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <img className={s.logo} src={process.env.PUBLIC_URL + '/images/logo.ico'} alt='Логотип' />
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <Select
          styles={colourStyles}
          options={options}
          value={selectedCity}
          onChange={handleCitySelect}
          defaultValue={options[0]}
        />
      </div>
    </header>
  );
}
