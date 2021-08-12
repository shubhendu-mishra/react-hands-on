import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); //Returns array (first is value, and second is the reassign function)
  //let title = props.title; //This won't be reevaluated

  const changeTitleClickHandler = () => {
    setTitle("Updated");
    console.log("Button is clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">Rs. {props.amount}</div>
      <button onClick={changeTitleClickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
