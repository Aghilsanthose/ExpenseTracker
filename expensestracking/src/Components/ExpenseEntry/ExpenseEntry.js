import React from "react";
import classes from "./ExpenseEntry.module.css";
import Input from "../Input/Input";
import DatePrick from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const expenseEntry = props => {
  return (
    <form onSubmit={props.modalHandler} className={classes.entrystyle}>
      <label className={classes.individualformitem}>Date</label>
      <DatePrick
        selected={props.state.date.value}
        onChange={props.dateHandler}
      />
      <label className={classes.individualformitem}>Spent/Credited By</label>
      <select onChange={props.spentcreditHandler}>
        <option>Durai</option>
        <option>Aghilsanthose</option>
        <option>Gowri</option>
        <option>Dhanalakshmi</option>
        <option>Others</option>
      </select>
      <label className={classes.individualformitem}>
        Notes ( <span className={classes.red}>*</span> ){" "}
      </label>
      <Input
        onChangeHandler={props.notesHandler}
        label="Notes"
        type="text"
        name="spent/credited_by"
        touched={props.touched}
        error={props.state.notes.error}
        errorMsg={props.state.notes.errorMsg}
      ></Input>
      <label className={classes.individualformitem}>
        Amount ( <span className={classes.red}>*</span> )
      </label>
      <Input
        onChangeHandler={props.amountHandler}
        type="number"
        name="amount"
        touched={props.touched}
        error={props.state.amount.error}
        errorMsg={props.state.amount.errorMsg}
      ></Input>
      <label className={classes.individualformitem}>TransactionType </label>
      <select
        onChange={props.transactionTypeHandler}
        className={classes.individualformitem}
      >
        <option>Debit</option>
        <option>Credit</option>
      </select>
      <button type="submit" disabled={!props.disabled}>
        CONTINUE
      </button>
    </form>
  );
};

export default expenseEntry;
