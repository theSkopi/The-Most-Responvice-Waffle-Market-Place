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
    themeState === "light" ? Styles.light__mode : Styles.dark__mode;
  const pathName = useLocation().pathname;

  const handleThemeSwitch = (theme) => {
    setThemeState(themeSetter(theme));
    setThemeMode(theme);
  };

  return (
    <header className={theme}>
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
      <ul className={Styles.menu__container}>
        <li className={pathName === "/" ? Styles.current__site : ""}>
          {" "}
          <Link to={"/"}>
            <BiHomeAlt className={Styles.menu__icon} />
            <h5>HOME</h5>
          </Link>
        </li>
        <li
          className={
            pathName === "/order" ? Styles.current__site : ""
          }
        >
          <Link to={"/order"}>
            <HiOutlineNewspaper className={Styles.menu__icon} />
            <h5>ORDER</h5>
          </Link>
        </li>
        <li
          className={
            pathName === "/waffles" ? Styles.current__site : ""
          }
        >
          <Link to={"/waffles"}>
            <MdOutlineFastfood className={Styles.menu__icon} />
            <h5>WAFFLES</h5>
          </Link>
        </li>
        <li
          className={
            pathName === "/join-us" ? Styles.current__site : ""
          }
        >
          <Link to={"/join-us"}>
            <AiOutlinePlusCircle className={Styles.menu__icon} />
            <h5>JOIN US!</h5>
          </Link>
        </li>
      </ul>
      <ul className={Styles.theme__switch}>
        <button
          className={themeMode === "light" ? Styles.selected : ""}
          onClick={() => handleThemeSwitch("light")}
        >
          <BsSun />
        </button>
        <button
          className={themeMode === "dark" ? Styles.selected : ""}
          onClick={() => handleThemeSwitch("dark")}
        >
          <MdDarkMode />
        </button>
        <button
          className={themeMode === "auto" ? Styles.selected : ""}
          onClick={() => handleThemeSwitch("auto")}
        >
          <BsClockHistory />
        </button>
      </ul>
    </header>
  );
}

export default Header;
