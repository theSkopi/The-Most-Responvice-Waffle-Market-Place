import Styles from "../styling/Layout.module.css";
import React, { useEffect } from "react";
import Header from "./AppHeader";
import Footer from "./AppFooter";

function Layout({
  setThemeState,
  themeState,
  themeMode,
  setThemeMode,
  children,
}) {
  let theme =
    themeState === "light" ? Styles.light__mode : Styles.dark__mode;

  useEffect(() => {
    if (themeState === "light")
      document.body.style.backgroundColor = "rgb(231, 231, 231)";
    return () => {
      document.body.style.backgroundColor = "rgb(37, 35, 35)";
    };
  }, [themeState]);
  return (
    <div className={Styles.layout}>
      <Header
        themeState={themeState}
        setThemeState={setThemeState}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />
      <div className={`${Styles.content} ${theme}`}>{children}</div>
      <Footer themeState={themeState} />
    </div>
  );
}

export default Layout;
