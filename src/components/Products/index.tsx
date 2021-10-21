import React from 'react'
import style from './style.module.scss'
import data from '../../data/headphones'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

function Produts() {
  const width = window.innerWidth
  return (
    <section className={style.products}>
      <h4 className={style.products__header}>Headphones</h4>
      <ul className={classNames(style.products__list, 'container')}>
        {data.map((item, index) => {
          const {
            img: { mobile, tablet, desktop },
            new_label,
            name,
            text,
            id,
          } = item
          return (
            <li className={classNames(style.product)}>
              {/* `${width >= 1280 && id % 2 === 0 ? 'reverse' : ''}` */}
              <picture className={classNames(style.product__content)}>
                <source media='(max-width: 375px)' srcSet={mobile} />
                <source media='(max-width: 768px)' srcSet={tablet} />
                <img
                  className={classNames(style.product__img)}
                  src={desktop}
                  alt={name}
                />
              </picture>
              <article
                className={classNames(
                  style.product__content,
                  style.product__text
                )}>
                {new_label ? (
                  <p className='overline text_peach'>new product</p>
                ) : (
                  ''
                )}
                <h4>{name}</h4>
                <p>{text}</p>
                <Link to={`/product/${id}`} className='btn btn_peach'>
                  see product
                </Link>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Produts
