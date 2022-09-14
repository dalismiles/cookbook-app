import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../images/book.svg";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const links = [{ href: "/", label: "Home", title: "Vai alla home" }];

  return (
    <nav className={styles.Navbar}>
      <div className={styles.companyLogo}>
        <img src={Logo} alt="logo" />
        <span> COOKBOOK </span>
      </div>
      <ul>
        {links.map(({ href, label, title }) => (
          <li key={href}>
            <NavLink
              to={href}
              title={title ? title : label}
              style={({ isActive }) => ({
                pointerEvents: isActive ? "none" : "auto",
                opacity: isActive ? 0.4 : 1,
              })}
              className={({ isActive }) =>
                isActive ? "nav nav--active" : "nav"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
