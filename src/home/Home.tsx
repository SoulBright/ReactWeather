import React from 'react'

import s from './Home.module.scss'
import Header from './components/header/Header'
import ThisDay from './components/thisDay/ThisDay'
import ThisDayInfo from './components/thisDayInfo/ThisDayInfo'
import Days from './components/days/Days'

export default function Home() {
  return (
    <div className={s.home}>
      <Header />
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}
