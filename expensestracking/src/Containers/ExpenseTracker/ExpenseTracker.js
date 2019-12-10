import React, { Component } from "react";
import ExpenseEntry from "../../Components/ExpenseEntry/ExpenseEntry";
import classes from "./ExpenseTracker.module.css";
import instance from "../../Instances/instance";
import Modal from "../../Components/Modal/Modal";
import Backdrop from "../../Components/Backdrop/Backdrop";

class ExpenseTracker extends Component {
  state = {
    data: {
      date: {
        error: false,
        errorMsg: "Date cannot be blank",
        touched: false,
        value: new Date(),
        id: "date"
      },
      amount: {
        error: false,
        errorMsg: "Amount should be numeric",
        touched: false,
        value: "",
        id: "amount"
      },
      spentcredit: {
        error: false,
        errorMsg: "This item cannot be blank",
        touched: false,
        value: "Durai",
        id: "spentcredit"
      },
      transactionType: {
        error: false,
        touched: false,
        value: "Debit",
        id: "transactionType"
      },
      notes: {
        error: false,
        touched: false,
        value: "",
        errorMsg: "This item cannot be blank",
        id: "notes"
      }
    },
    modal: false
  };

  validationFunc = data => {
    let pattern = null;
    switch (data.id) {
      case "amount":
        pattern = /^[0-9]{1,9}$/;
        if (pattern.test(data.value)) {
          return false;
        } else {
          return true;
        }
        break;
      case "notes":
        pattern = /.{1,25}/;
        if (pattern.test(data.value)) {
          return false;
        } else {
          return true;
        }
        break;
    }
  };

  amountHandler = event => {
    let temp = {
      ...this.state.data,
      amount: {
        ...this.state.data.amount
      }
    };
    temp.amount.value = event.target.value;
    temp.amount.error = this.validationFunc(temp.amount);
    this.setState({ data: temp });
  };

  notesHandler = event => {
    let temp = {
      ...this.state.data,
      notes: { ...this.state.data.notes }
    };
    temp.notes.value = event.target.value;
    temp.notes.error = this.validationFunc(temp.notes);
    this.setState({ data: temp });
  };

  spentcreditHandler = event => {
    let temp = {
      ...this.state.data,
      spentcredit: { ...this.state.data.spentcredit }
    };
    temp.spentcredit.value = event.target.value;
    this.setState({ data: temp });
  };

  transactionTypeHandler = event => {
    let temp = {
      ...this.state.data,
      transactionType: { ...this.state.data.transactionType }
    };
    temp.transactionType.value = event.target.value;
    this.setState({ data: temp });
  };

  dateHandler = date => {
    let temp = {
      ...this.state.data,
      date: {
        ...this.state.data.date
      }
    };
    temp.value = date;
    temp.error = this.validationFunc(temp.date);
    this.setState({ date: temp });
  };

  disablingSubmit = () => {
    const temp = this.state.data;
    return (
      Object.keys(temp).filter(dataKeys => {
        return this.state.data[dataKeys].value === "";
      }).length === 0
    );
  };

  dataSubmitToDb = () => {
    let valueObj = {};
    for (let individualData in this.state.data) {
      valueObj[individualData] = this.state.data[individualData].value;
    }
    instance
      .post("/expensesList.json", valueObj)
      .then(response => {
        this.props.history.push("/expense-array");
      })
      .catch(err => {});
  };

  modalHandler = event => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return { modal: !prevState.modal };
    });
  };

  render() {
    // console.log("State after entering the value", this.state);

    let modal = null;

    if (this.state.modal) {
      modal = (
        <React.Fragment>
          <Backdrop clicked={this.modalHandler} />
          <Modal
            clicked={this.modalHandler}
            dataSubmit={this.dataSubmitToDb}
            amount={this.state.data.amount.value}
            spentcredit={this.state.data.spentcredit.value}
          />
        </React.Fragment>
      );
    }

    return (
      <div className={classes.expense}>
        <div className={classes.background__image}></div>
        {modal}
        <ExpenseEntry
          state={this.state.data}
          amountHandler={this.amountHandler}
          notesHandler={this.notesHandler}
          spentcreditHandler={this.spentcreditHandler}
          transactionTypeHandler={this.transactionTypeHandler}
          dateHandler={this.dateHandler}
          modalHandler={this.modalHandler}
          disabled={this.disablingSubmit()}
        />
      </div>
    );
  }
}

export default ExpenseTracker;
