import React, { Component } from "react";
import instance from "../../Instances/instance";
import Spinner from "../../Components/Spinner/Spinner";
import classes from "./ExpenseArray.module.css";
import IndividualExpense from "../../Components/IndividualExpense/IndividualExpense";

class ExpenseArray extends Component {
  state = {
    expensesArr: null,
    loading: true,
    error: false
  };
  componentDidMount() {
    instance
      .get("/expensesList.json")
      .then(response => {
        this.setState({ expensesArr: response.data, loading: false });
      })
      .catch(error => {
        console.log("Error in expense array", error);
      });
  }
  render() {
    let expenses = null;
    if (!this.state.expensesArr && this.state.loading) {
      expenses = <Spinner />;
    }
    if (this.state.expensesArr) {
      expenses = Object.keys(this.state.expensesArr).map(expenseId => {
        return (
          <IndividualExpense
            key={expenseId}
            state={this.state.expensesArr[expenseId]}
          />
        );
      });
    }
    return (
      <React.Fragment>
        <div className={classes.white}></div>
        <div className={classes.expensearr}>{expenses}</div>
      </React.Fragment>
    );
  }
}

export default ExpenseArray;
