import React from 'react'
import style from './style.module.scss'
import speaker_zx9_mobile from '../../assets/home/mobile/image-speaker-zx9.png'
import speaker_zx9_tablet from '../../assets/home/tablet/image-speaker-zx9.png'
import speaker_zx9_desktop from '../../assets/home/desktop/image-speaker-zx9.png'
import speaker_zx7_mobile from '../../assets/home/mobile/image-speaker-zx7.jpg'
import speaker_zx7_tablet from '../../assets/home/tablet/image-speaker-zx7.jpg'
import speaker_zx7_desktop from '../../assets/home/desktop/image-speaker-zx7.jpg'
import earphones_mobile from '../../assets/home/mobile/image-earphones-yx1.jpg'
import earphones_tablet from '../../assets/home/tablet/image-earphones-yx1.jpg'
import earphones_desktop from '../../assets/home/desktop/image-earphones-yx1.jpg'
import circles from '../../assets/home/desktop/pattern-circles.svg'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

function Featured() {
  const width = window.innerWidth
  return (
    <section className='container'>
      <article
        className={classNames(style.featured__item, style.featured__item_big)}
        style={{ backgroundImage: `url(${circles})` }}>
        <picture>
          <source media='(max-width: 375px)' srcSet={speaker_zx9_mobile} />
          <source media='(max-width: 768px)' srcSet={speaker_zx9_tablet} />
          <img
            className={classNames(style.featured__img)}
            src={speaker_zx9_desktop}
            alt='speaker'
          />
        </picture>
        <div className={style.featured__textBlock}>
          <h3 className={classNames(style.featured__h2, 'text_white')}>
            zx9 speaker
          </h3>
          <p className={classNames(style.featured__p, 'text_white')}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to='/' className='btn btn_black'>
            see product
          </Link>
        </div>
      </article>
      <article
        className={classNames(
          style.featured__item,
          style.featured__item_medium
        )}
        style={
          width >= 1280
            ? { backgroundImage: `url(${speaker_zx7_desktop})` }
            : width >= 768
            ? { backgroundImage: `url(${speaker_zx7_tablet})` }
            : { backgroundImage: `url(${speaker_zx7_mobile})` }
        }>
        <div
          className={classNames(
            style.featured__textBlock,
            style.featured__textBlock_medium
          )}>
          <h4>zx7 speaker</h4>
          <Link to='/' className='btn btn_transparent'>
            see product
          </Link>
        </div>
      </article>
      <article className={style.featured__item_double}>
        <div
          className={classNames(
            style.featured__item,
            style.featured__item_small
          )}>
          <img
            src={`${
              width >= 1280
                ? earphones_desktop
                : width >= 768
                ? earphones_tablet
                : earphones_mobile
            }`}
            alt='earphones'
          />
        </div>
        <div
          className={classNames(
            style.featured__item,
            style.featured__item_small
          )}>
          <div
            className={classNames(
              style.featured__textBlock,
              style.featured__textBlock_small
            )}>
            <h4>yx1 earphones</h4>
            <Link to='/' className='btn btn_transparent'>
              see product
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Featured
