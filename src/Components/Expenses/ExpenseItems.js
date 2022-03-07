import "./ExpenseItems.css";
// import { useState } from "react";
//import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  // const [title, setTitle] = useState(props.title);

  // function clickHandler() {
  //   setTitle("updated!");
  //   console.log(title);
  // }

  return (
    <div className="expense-item">
      <div className="expense-item-description">
        <h2>{props.title}</h2>
      </div>
      <ExpenseDate date={props.date} />
      {/* <button onClick={clickHandler}>testing</button> */}
      <div className="expense-item-price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItems;
