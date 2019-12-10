import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";

const navigationItems = props => {
  return (
    <div className={classes.navigationitems}>
      <NavigationItem clicked={props.navclose} to="/">
        Home
      </NavigationItem>
      <NavigationItem clicked={props.navclose} to="/expense-array">
        Expense Array
      </NavigationItem>
    </div>
  );
};

export default navigationItems;
