import React from 'react'
import Styles from '../styling/Footer.module.css'
import { Link, useLocation } from 'react-router-dom'

function Footer({themeMode}) {
  let theme = themeMode === 'light' ? Styles.light__mode : Styles.dark__mode
  const pathName = useLocation().pathname;

  return (
    <div className={`${Styles.footer} ${theme}`}>
      <Link className={pathName === '/find-us' ? `${Styles.current__site} ${Styles.link}`: Styles.link} to={'/find-us'}>Where to finf us</Link>
      <Link className={pathName === '/contact' ? `${Styles.current__site} ${Styles.link}`: Styles.link} to={'/contact'}>Contact</Link>
      <Link className={pathName === '/faq' ? `${Styles.current__site} ${Styles.link}`: Styles.link} to={'/faq'}>FAQ</Link>
      <Link className={pathName === '/about-me' ? `${Styles.current__site} ${Styles.link}`: Styles.link} to={'/about-me'}>About ME!</Link>
    </div>
  )
}

export default Footer
