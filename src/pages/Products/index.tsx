import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

type ProductsProps = {
  data: Array<Product>
}

function Products({ data }: ProductsProps) {
  const { type } = useParams<any>()
  const products = data.filter(item => item.category === type)
  const width = window.innerWidth
  return (
    <section className={style.products}>
      <h4 className={style.products__header}>{type}</h4>
      <ul className={classNames(style.products__list, 'container')}>
        {products.map((item, index) => {
          const {
            image: { mobile, tablet, desktop },
            new_label,
            name,
            description,
            id,
          } = item
          return (
            <li key={id} className={classNames(style.product)}>
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
                <p>{description}</p>
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

export default Products
