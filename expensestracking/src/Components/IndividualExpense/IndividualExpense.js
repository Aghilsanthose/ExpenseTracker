import React from "react";
import classes from "./IndividualExpense.module.css";

const individualExpense = props => {
  return (
    <div className={classes.individualexpense}>
      <div className={classes.firstline}>
        <div>{props.state.date.toString().slice(0, 10)}</div>
        <div>{props.state.spentcredit}</div>
        <div
          className={
            props.state.transactionType === "Debit"
              ? classes.red
              : classes.green
          }
        >
          {props.state.amount}
        </div>
      </div>
      <div className={classes.secondline}>
        Description : {props.state.notes}
      </div>
    </div>
  );
};

export default individualExpense;
