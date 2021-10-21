import React from 'react'
import style from './style.module.scss'
import best_gear_desktop from '../../assets/shared/desktop/image-best-gear.jpg'
import best_gear_tablet from '../../assets/shared/tablet/image-best-gear.jpg'
import best_gear_mobile from '../../assets/shared/mobile/image-best-gear.jpg'
import classNames from 'classnames'

function About() {
  return (
    <section className={classNames(style.about, 'container')}>
      <div className={classNames(style.about__textBlock)}>
        <h2 className={classNames(style.about__h2)}>
          Bringing you the <span className='text_peach'>best</span> audio gear
        </h2>
        <p className={classNames(style.about__p)}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture>
        <source media='(max-width: 375px)' srcSet={best_gear_mobile} />
        <source media='(max-width: 768px)' srcSet={best_gear_tablet} />
        <img
          className={classNames(style.about__img)}
          src={best_gear_desktop}
          alt='man with headphones'
        />
      </picture>
    </section>
  )
}

export default About
