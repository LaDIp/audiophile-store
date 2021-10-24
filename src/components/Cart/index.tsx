import React, { MouseEvent } from 'react'
import style from './style.module.scss'
import cart_img from '../../assets/icon-cart.svg'
import { useActions, useAppSelector, useOnClickOutside } from '../../hooks'
import { RootState } from '../../redux/store'
import classNames from 'classnames'
import { store } from '../../redux/store'
import Counter from '../Counter'
import { Link } from 'react-router-dom'

function Cart() {
  const [visibleCart, setVisibleCart] = React.useState(false)
  const cart = useAppSelector((store: RootState) => store.cart)
  const { deleteCartAction, changeProductAction, deleteProductAction } =
    useActions()
  const cartRef = React.useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    setVisibleCart(false)
  }

  const handleDeleteProduct = (id: number) => {
    deleteProductAction(id)
  }
  const handleDeleteCart = () => {
    deleteCartAction()
  }
  const handleCount = (id: number, count: number) => {
    changeProductAction({ id, count })
  }

  useOnClickOutside(cartRef, handleClickOutside)

  return (
    <div ref={cartRef}>
      <div className={style.cart}>
        <button
          className={style.cart__button}
          onClick={() => setVisibleCart(!visibleCart)}>
          <img src={cart_img} alt='cart' />
        </button>
        {cart.products.length ? (
          <span className={style.cart__badge}>{cart.products.length}</span>
        ) : null}
      </div>
      {cart.products.length && visibleCart ? (
        <div className={style.modal}>
          <ul className={style.modal__list}>
            {cart.products.map(item => (
              <li key={item.product.id} className={style.modal__item}>
                <img src={item.product.cartImage} alt='' />
                <p className={style.modal__p}>{item.product.name}</p>
                <Counter
                  count={item.count}
                  onClick={(count: number) =>
                    handleCount(item.product.id, count)
                  }
                />
                <button
                  className={style.modal__delete}
                  onClick={() => handleDeleteProduct(item.product.id)}>
                  +
                </button>
              </li>
            ))}
          </ul>
          <button className={style.modal__remove} onClick={handleDeleteCart}>
            Remove all
          </button>
          <div className={style.modal__total}>
            <h5>Total</h5>
            <h6>
              $
              {cart.products.reduce(
                (acc, item) => acc + item.product.price * item.count,
                0
              )}
            </h6>
          </div>
          <Link
            to='/checkout'
            className={classNames(style.modal__checkout, 'btn btn_peach')}
            onClick={() => setVisibleCart(false)}>
            checkout
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default Cart
