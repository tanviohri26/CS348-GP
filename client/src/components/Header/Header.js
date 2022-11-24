import React from 'react';
import classes from "./Header.module.css";

export default function Header() {
    return (
      <div className={classes.header}>
        <div className={classes.logo}>LOGO</div>
        <div>
          <ul className={classes.nav}>
            <li>link a</li>
            <li>link b</li>
            <li>link c</li>
          </ul>
        </div>
      </div>
    );
};
  