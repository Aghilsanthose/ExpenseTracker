import React from "react";
import classes from "./Input.module.css";
const input = props => {
  let errClass = [classes.individualformitem];
  if (props.error) {
    errClass.push(classes.error);
  }

  return (
    <React.Fragment>
      {props.error ? <p className={classes.para}>{props.errorMsg}</p> : null}
      <input
        onChange={props.onChangeHandler}
        type={props.type}
        name={props.name}
        className={errClass.join(" ")}
      ></input>
    </React.Fragment>
  );
};

export default input;
