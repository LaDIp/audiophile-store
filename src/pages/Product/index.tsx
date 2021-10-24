import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { links } from '../../utils/constants'
import { useActions } from '../../hooks'
import { useHistory, useParams } from 'react-router'
import Counter from '../../components/Counter'

type ProductProps = {
  data: Array<Product>
}

function Product({ data }: ProductProps) {
  const history = useHistory()
  const { id } = useParams<any>()
  const product = data.filter(item => item.id === Number(id))[0]
  const [count, setCount] = React.useState(1)
  const { addProductAction } = useActions()
  const handleCount = (count: number) => setCount(count)
  const handleAddCart = () => addProductAction({ count, product })
  const handleBack = () => history.goBack()
  return (
    <section className={classNames(style.product, 'container')}>
      <button onClick={handleBack} className={'backButton'}>
        go back
      </button>
      <div className={classNames(style.product__content)}>
        <picture>
          <source media='(max-width: 375px)' srcSet={product.image.mobile} />
          <source media='(max-width: 768px)' srcSet={product.image.tablet} />
          <img
            className={classNames(style.product__img)}
            src={product.image.desktop}
            alt={product.name}
          />
        </picture>
        <article className={style.product__text}>
          {product.new_label ? (
            <p className='overline text_peach'>new product</p>
          ) : (
            ''
          )}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className={style.product__price}>${product.price}</p>
          <Counter count={count} onClick={handleCount} />
          <button className='btn btn_peach' onClick={handleAddCart}>
            add to cart
          </button>
        </article>
      </div>
      <article className={style.product__features}>
        <h2>Features</h2>
        <p>{product.features}</p>
        <p>{product.description}</p>
      </article>
      <article className={classNames(style.product__include, style.include)}>
        <h2 className={style.include__h2}>I the box</h2>
        <ul className={style.include__list}>
          {product.includes?.map(item => (
            <li key={item.item} className={style.include__item}>
              <span className='text_peach'>{item.quantity}x</span>
              <p>{item.item}</p>
            </li>
          ))}
        </ul>
      </article>
      <article className={style.product__gallery}>
        <div
          className={classNames(
            style.product__galleryImage,
            style.product__gallery_1
          )}>
          <picture>
            <source
              media='(max-width: 375px)'
              srcSet={product.gallery?.first.mobile}
            />
            <source
              media='(max-width: 768px)'
              srcSet={product.gallery?.first.tablet}
            />
            <img src={product.gallery?.first.desktop} alt={product.name} />
          </picture>
        </div>
        <div
          className={classNames(
            style.product__galleryImage,
            style.product__gallery_2
          )}>
          <picture>
            <source
              media='(max-width: 375px)'
              srcSet={product.gallery?.second.mobile}
            />
            <source
              media='(max-width: 768px)'
              srcSet={product.gallery?.second.tablet}
            />
            <img src={product.gallery?.second.desktop} alt={product.name} />
          </picture>
        </div>
        <div
          className={classNames(
            style.product__galleryImage,
            style.product__gallery_3
          )}>
          <picture>
            <source
              media='(max-width: 375px)'
              srcSet={product.gallery?.third.mobile}
            />
            <source
              media='(max-width: 768px)'
              srcSet={product.gallery?.third.tablet}
            />
            <img src={product.gallery?.third.desktop} alt={product.name} />
          </picture>
        </div>
      </article>
      <article className={style.suggestions}>
        <h2 className={style.suggestions__h2}>You may also like</h2>
        <ul className={style.suggestions__list}>
          {product.others?.map(item => (
            <li>
              <picture>
                <source media='(max-width: 375px)' srcSet={item.image.mobile} />
                <source media='(max-width: 768px)' srcSet={item.image.tablet} />
                <img src={item.image.desktop} alt={item.name} />
              </picture>
              <h3>{item.name}</h3>
              <Link to='/' className='btn btn_peach'>
                see product
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default Product
