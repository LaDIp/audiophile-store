import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import arrow from '../../assets/shared/desktop/icon-arrow-right.svg'

type CategoryCardProps = {
  img: string
  text: string
  url: string
}

function CategoryCard({ img, text, url }: CategoryCardProps) {
  return (
    <li className={style.card}>
      <Link to='/'>
        <img src={img} alt={text} className={style.card__img} />
        <div className={style.card__textBlock}>
          <h6 className={style.card__h6}>{text}</h6>
          <div className='btn btn_shop'>
            <p className='sub-title'>shop</p>
            <img src={arrow} alt='arrow right' />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default CategoryCard
