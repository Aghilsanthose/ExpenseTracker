import React from "react";
import classes from "./Header.module.css";
import Toggler from "./Toggler/Toggler";
import NavigationItems from "../NavigationItems/NavigationItems";

const header = props => {
  return (
    <div className={classes.header}>
      <Toggler clicked={props.clicked} />
      <h1 className={classes.title}>Expense Tracker</h1>
      <div className={classes.visible__navigationitems}>
        <NavigationItems />
      </div>
    </div>
  );
};

export default header;
