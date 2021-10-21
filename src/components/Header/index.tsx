import React from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { links } from '../../utils/constants'
import { listenerCount } from 'process'
import logo from '../../assets/shared/desktop/logo.svg'
import hamburger from '../../assets/shared/tablet/icon-hamburger.svg'
import classNames from 'classnames'
import { Cart } from '..'

function Header() {
  const [visibleMenu, setVisibleMenu] = React.useState(true)
  const navRef = React.useRef<HTMLElement>(null)

  return (
    <header className={style.header}>
      <nav ref={navRef} className={classNames(style.nav, 'container')}>
        <button
          aria-label='toggle navigation menu'
          className={style.header__hamburger}
          onClick={() => setVisibleMenu(!visibleMenu)}>
          <img src={hamburger} alt='hamburger menu icon' />
        </button>
        <img className={style.logo} src={logo} alt='audiophile logo' />
        <ul
          className={classNames(style.header__navList, 'navList', {
            [style.header__navList_hide]: visibleMenu,
          })}>
          {links.map(link => (
            <li key={link.id}>
              <Link className='navList__link' to={link.url}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <Cart />
      </nav>
    </header>
  )
}

export default Header
