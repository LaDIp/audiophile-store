import React from 'react'
import logo from '../../assets/logo.svg'
import facebook from '../../assets/icon-facebook.svg'
import twitter from '../../assets/icon-twitter.svg'
import instagram from '../../assets/icon-instagram.svg'

import style from './style.module.scss'
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../../utils/constants'

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={classNames(style.footer__container, 'container')}>
        <div className={classNames(style.footer__nav)}>
          <img src={logo} alt='audiophole' className='footer__logo' />
          <ul className={classNames(style.footer__navList, 'navList')}>
            {links.map(link => (
              <li key={link.id}>
                <NavLink className='navList__link' to={link.url}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={classNames(style.footer__info)}>
          <p className={classNames(style.footer__text, 'text_white')}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <ul className={style.footer__social}>
            <li>
              <Link
                to='https:/www.facebook.com'
                target='_blank'
                rel='noreferrer'>
                <img
                  src={facebook}
                  alt='facebook'
                  className={style.footer__icon}
                />
              </Link>
            </li>
            <li>
              <Link
                to='https:/www.twitter.com'
                target='_blank'
                rel='noreferrer'>
                <img
                  src={twitter}
                  alt='twitter'
                  className={style.footer__icon}
                />
              </Link>
            </li>
            <li>
              <Link
                to='https:/www.instagram.com'
                target='_blank'
                rel='noreferrer'>
                <img
                  src={instagram}
                  alt='instagram'
                  className={style.footer__icon}
                />
              </Link>
            </li>
          </ul>
          <p className={classNames(style.footer__copyright, 'text_white')}>
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
