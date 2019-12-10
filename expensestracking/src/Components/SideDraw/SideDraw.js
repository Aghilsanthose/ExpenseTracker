import React from "react";
import classes from "./SideDraw.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDraw = props => {
  return (
    <div className={classes.sidedraw}>
      <NavigationItems navclose={props.navclose} />
    </div>
  );
};

export default sideDraw;
