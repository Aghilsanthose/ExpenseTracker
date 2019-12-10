import React from "react";
import classes from "./Modal.module.css";
import { withRouter } from "react-router-dom";

const modal = props => {
  // console.log("In modal", props);
  return (
    <div className={classes.modal}>
      <p className={classes.title}>Your Transaction Summary </p>
      <p>
        Amount : <strong>{props.amount}</strong>
      </p>
      <p>
        Spent/Credited by : <strong> {props.spentcredit}</strong>
      </p>
      <p className={classes.title}>Do you want to save ?</p>
      <div className={classes.buttons}>
        <button onClick={props.clicked} className={classes.yes}>
          CANCEL
        </button>
        <button onClick={props.dataSubmit} className={classes.no}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default withRouter(modal);
