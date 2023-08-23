import React from 'react'
import { Item } from './ThisDayInfo'

import s from './ThisDayInfo.module.scss'

interface props {
    item: Item
}

export default function ThisDayItem({item}: props) {
    const {name, value} = item
  return (
    <div className={s.item}>
      <div className={s.item__name}>{name}</div>
      <div className={s.item__value}>{value}</div>
    </div>
  )
}
