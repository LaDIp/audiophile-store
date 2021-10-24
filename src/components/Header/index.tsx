import React from 'react'
import style from './style.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../../utils/constants'
import { listenerCount } from 'process'
import logo from '../../assets/logo.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import classNames from 'classnames'
import { Cart } from '..'
import { useOnClickOutside } from '../../hooks'

function Header() {
  const [visibleMenu, setVisibleMenu] = React.useState(false)
  const navRef = React.useRef<HTMLUListElement>(null)

  const handleClickOutside = () => {
    setVisibleMenu(false)
  }

  const handleMenu = () => {
    setVisibleMenu(!visibleMenu)
  }

  useOnClickOutside(navRef, handleClickOutside)

  return (
    <header className={style.header}>
      <nav className={classNames(style.nav, 'container')} ref={navRef}>
        <button
          aria-label='toggle navigation menu'
          className={style.header__hamburger}
          onClick={handleMenu}>
          <img src={hamburger} alt='hamburger menu icon' />
        </button>
        <Link to='/'>
          <img className={style.logo} src={logo} alt='audiophile logo' />
        </Link>
        <ul
          className={classNames(style.header__navList, 'navList', {
            [style.header__navList_hide]: !visibleMenu,
          })}
          onClick={handleMenu}>
          {links.map(link => (
            <li key={link.id}>
              <NavLink className='navList__link' to={link.url}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <Cart />
      </nav>
    </header>
  )
}

export default Header
