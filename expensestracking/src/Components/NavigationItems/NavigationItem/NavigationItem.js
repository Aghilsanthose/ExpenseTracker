import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const navigationItem = props => {
  let navclose = null;
  if (props.clicked) {
    navclose = props.clicked;
  }
  return (
    <div className={classes.navigationitem}>
      <NavLink
        onClick={navclose}
        activeClassName={classes.navigation__active}
        to={props.to}
        exact
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default navigationItem;
