import { useState } from "react";
const ExpenseForm = (props) => {
  const [enterTitle, setTitle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // console.log(event.target.value);
    //setUserInput({ enterTitle: event.target.value, ...userInput });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //setUserInput({ enterAmount: event.target.value, ...userInput });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    //setUserInput({ enterDate: event.target.value, ...userInput });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    setAmount("");
    setDate("");
    setTitle("");
    props.onSaveExpenseData(expenseDate);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="Submit" >Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
