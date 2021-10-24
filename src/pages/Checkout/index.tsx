import classNames from 'classnames'
import style from './style.module.scss'
import React from 'react'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik'
import { useHistory } from 'react-router'
import { useAppSelector } from '../../hooks'
import { RootState } from '../../redux/store'

interface CheckoutValues {
  name: string
}

function Checkout() {
  const history = useHistory()
  const handleBack = () => history.goBack()
  const cart = useAppSelector((store: RootState) => store.cart)
  const initialValues: CheckoutValues = { name: '' }
  return (
    <section className={classNames('container')}>
      <button onClick={handleBack} className={'backButton'}>
        go back
      </button>
      <div className={style.checkout}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            actions.setSubmitting(false)
          }}>
          {({ values }: any) => (
            <Form className={style.checkout__form}>
              <div className={style.checkout__wrapper}>
                <h4>Checkout</h4>

                <h6
                  className={classNames(
                    style.checkout__subtitle,
                    'text_peach'
                  )}>
                  Billing detalis
                </h6>
                <label className={style.checkout__label} htmlFor='Name'>
                  Name
                </label>
                <Field id='name' name='Name' placeholder='Alexei Ward' />
                <label className={style.checkout__label} htmlFor='emailadress'>
                  Email Address
                </label>
                <Field
                  id='emailadress'
                  name='emailadress'
                  placeholder='alexeiward@mail.com'
                />
                <label className={style.checkout__label} htmlFor='phone'>
                  Phone Number
                </label>
                <Field id='phone' name='phone' placeholder='+1 202-555-0136' />
                <h6
                  className={classNames(
                    style.checkout__subtitle,
                    'text_peach'
                  )}>
                  Shipping info
                </h6>
                <label className={style.checkout__label} htmlFor='address'>
                  Your Address
                </label>
                <Field
                  id='address'
                  name='address'
                  placeholder='Moscow Red Square'
                />
                <label className={style.checkout__label} htmlFor='zip'>
                  ZIP Code
                </label>
                <Field id='zip' name='zip' placeholder='123456' />
                <label className={style.checkout__label} htmlFor='city'>
                  City
                </label>
                <Field id='city' name='city' placeholder='Moscow' />
                <label className={style.checkout__label} htmlFor='country'>
                  Country
                </label>
                <Field id='country' name='country' placeholder='Russia' />
                <h6
                  className={classNames(
                    style.checkout__subtitle,
                    'text_peach'
                  )}>
                  Payment detalis
                </h6>
                <div role='group' aria-labelledby='my-radio-group'>
                  <div className={style.checkout__payments}>
                    <label className={style.checkout__label}>
                      Payment Method
                    </label>
                    <label className='radioInput'>
                      <Field type='radio' name='picked' value='emoney' />
                      e-Money
                    </label>
                    <label className='radioInput'>
                      <Field type='radio' name='picked' value='cash' />
                      Cash on Delivery
                    </label>
                  </div>
                  {values.picked === 'emoney' && (
                    <div className={style.checkout__emoney}>
                      <label
                        className={style.checkout__label}
                        htmlFor='enumber'>
                        e-Money Number
                      </label>
                      <Field
                        id='enumber'
                        name='enumber'
                        placeholder='12312312434'
                      />
                      <label className={style.checkout__label} htmlFor='pin'>
                        e-Money PIN
                      </label>
                      <Field id='pin' name='pin' placeholder='3211' />
                    </div>
                  )}
                </div>
              </div>
              <div className={style.checkout__wrapper}>
                <ul className={style.checkout__list}>
                  {cart.products.map(item => (
                    <li key={item.product.id} className={style.checkout__item}>
                      <img src={item.product.cartImage} alt='' />
                      <p className={style.checkout__p}>{item.product.name}</p>
                      <p>x{item.count}</p>
                      <p>${item.product.price}</p>
                    </li>
                  ))}
                </ul>
                <div className={style.checkout__total}>
                  <h5>Total</h5>
                  <h6>
                    $
                    {cart.products.reduce(
                      (acc, item) => acc + item.product.price * item.count,
                      0
                    )}
                  </h6>
                </div>
                <button
                  className={classNames(
                    style.checkout__button,
                    'btn btn_peach'
                  )}
                  type='submit'>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default Checkout
