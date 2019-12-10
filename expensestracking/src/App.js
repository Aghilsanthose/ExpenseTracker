import React, { Component } from "react";
import "./App.css";
import ExpenseTracker from "./Containers/ExpenseTracker/ExpenseTracker";
import ExpenseArray from "./Containers/ExpenseArray/ExpenseArray";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Backdrop from "./Components/Backdrop/Backdrop";
import SideDraw from "./Components/SideDraw/SideDraw";

class App extends Component {
  state = { toggler: false };

  togglerHandler = () => {
    this.setState((prevState, props) => {
      return { toggler: !prevState.toggler };
    });
  };

  render() {
    let sideDraw = null;

    if (this.state.toggler) {
      sideDraw = (
        <React.Fragment>
          <Backdrop clicked={this.togglerHandler} />
          <SideDraw navclose={this.togglerHandler} />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {sideDraw}
        <Header clicked={this.togglerHandler} />
        <Route path="/expense-array" exact component={ExpenseArray} />
        <Route path="/" exact component={ExpenseTracker} />
      </React.Fragment>
    );
  }
}

export default App;
