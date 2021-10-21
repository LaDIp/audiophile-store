import React from 'react'
import style from './style.module.scss'
import mobileImage from '../../assets/home/mobile/image-header.jpg'
import tabletImage from '../../assets/home/tablet/image-header.jpg'
import desktopImage from '../../assets//home/desktop/image-hero.jpg'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

function Hero() {
  const width = window.innerWidth
  return (
    <section className={style.hero}>
      <div
        className={classNames(style.hero__content)}
        style={
          width >= 1280
            ? { backgroundImage: `url(${desktopImage})` }
            : width >= 768
            ? { backgroundImage: `url(${tabletImage})` }
            : { backgroundImage: `url(${mobileImage})` }
        }>
        <article className='container'>
          <p
            className={classNames(style.hero__overline, 'overline text_white')}>
            new product
          </p>
          <h1 className={classNames(style.hero__h1, 'text_white')}>
            XX99 Mark II Headphone
          </h1>
          <p className={classNames(style.hero__p, 'text_white')}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to='/product/4' className='btn btn_peach'>
            see product
          </Link>
        </article>
      </div>
    </section>
  )
}

export default Hero
