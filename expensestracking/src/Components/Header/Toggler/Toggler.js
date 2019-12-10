import React from "react";
import classes from "./Toggler.module.css";

const toggler = props => {
  return (
    <div className={classes.toggler} onClick={props.clicked}>
      <div className={classes.togglersymbol}></div>
      <div className={classes.togglersymbol}></div>
      <div className={classes.togglersymbol}></div>
    </div>
  );
};

export default toggler;
