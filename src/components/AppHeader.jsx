import React from "react";
import Styles from "../styling/Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

import { BsSun, BsClockHistory } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { MdOutlineFastfood } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

import themeSetter from "./themeMode";

function Header({
  themeState,
  setThemeState,
  themeMode,
  setThemeMode,
}) {
  let theme =
    themeMode === "light" ? Styles.light__mode : Styles.dark__mode;
  const pathName = useLocation().pathname;

  const handleThemeSwitch = (theme) => {
    setThemeState(theme);
    themeSetter(theme, setThemeMode);
  };

  return (
    <header className={`${Styles.header} ${theme}`}>
      <div className={Styles.logo__and__theme}>
        <Link to={"/"}>
          <img
            className={Styles.logo}
            src={process.env.PUBLIC_URL + "images/waffles-logo.png"}
            alt="waffle shuffle logo"
          />
          <img
            className={Styles.logo__mini}
            src={process.env.PUBLIC_URL + "images/logo-mini.png"}
            alt="waffle shuffle logo"
          />
        </Link>
        <ul className={Styles.theme__switch}>
          <button
            className={themeState === "light" ? Styles.selected : ""}
            onClick={() => handleThemeSwitch("light")}
          >
            <BsSun />
          </button>
          <button
            className={themeState === "dark" ? Styles.selected : ""}
            onClick={() => handleThemeSwitch("dark")}
          >
            <MdDarkMode />
          </button>
          <button
            className={themeState === "auto" ? Styles.selected : ""}
            onClick={() => handleThemeSwitch("auto")}
          >
            <BsClockHistory />
          </button>
        </ul>
      </div>
      <ul className={Styles.menu__container}>
        <li>
          {" "}
          <Link
            className={pathName === "/" ? Styles.current__site : ""}
            to={"/"}
          >
            <BiHomeAlt className={Styles.menu__icon} />
            <h5>HOME</h5>
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/order" ? Styles.current__site : ""
            }
            to={"/order"}
          >
            <HiOutlineNewspaper className={Styles.menu__icon} />
            <h5>ORDER</h5>
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/waffles" ? Styles.current__site : ""
            }
            to={"/waffles"}
          >
            <MdOutlineFastfood className={Styles.menu__icon} />
            <h5>WAFFLES</h5>
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/join-us" ? Styles.current__site : ""
            }
            to={"/join-us"}
          >
            <AiOutlinePlusCircle className={Styles.menu__icon} />
            <h5>JOIN US!</h5>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
