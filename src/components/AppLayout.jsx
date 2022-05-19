import Styles from '../styling/Layout.module.css'
import React from 'react'
import Header from './AppHeader'
import Footer from './AppFooter'

function Layout({setThemeState, themeState, themeMode, setThemeMode, children}) {
  let theme = themeMode === 'light' ? Styles.light__mode : Styles.dark__mode
  return (
    <div className={Styles.layout}>
      <Header themeState={themeState} setThemeState={setThemeState} themeMode={themeMode} setThemeMode={setThemeMode}/>
        <div className={`${Styles.content} ${theme}`}>{children}</div>
      <Footer themeMode={themeMode}/>
    </div>
  )
}

export default Layout