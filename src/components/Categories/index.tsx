import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'
import { CategoryCard } from '..'
import { categories } from '../../utils/constants'

function Categories() {
  return (
    <section className='container'>
      <ul className={style.categories}>
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            img={category.img}
            text={category.text}
            url={category.url}
          />
        ))}
      </ul>
    </section>
  )
}

export default Categories
