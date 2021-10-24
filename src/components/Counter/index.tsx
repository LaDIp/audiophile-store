import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'

type CounterProp = {
  count: number
  onClick: (count: number) => void
}

function Counter({ count, onClick }: CounterProp) {
  const inc = () => {
    onClick(count + 1)
  }
  const dec = () => {
    onClick(count - 1)
  }

  return (
    <div className={style.counter}>
      <button disabled={count === 1} onClick={dec}>
        -
      </button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
    </div>
  )
}

export default Counter
