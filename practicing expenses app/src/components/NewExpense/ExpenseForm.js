import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandley = function (event) {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setAmount] = useState("");
  const amountChangeHandler = function (event) {
    setAmount(event.target.value);
  };
  const [enteredDate, setDate] = useState("");
  const dateChangeHandler = function (event) {
    setDate(event.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandley}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

//alternative way of doing things, through a single state and keeping and eye on prev state.

//This is also inportant because

// const [userInput, setUserInput] = useState({
//   enteredTitle: "",
//   enteredAmount: "",
//   enteredDate: "",
// });
// const titleChangeHandler = (event) => {
//   setUserInput((prevState) => {
//     return { ...prevState, enteredTitle: event.target.value };
//   });
// };

// const amountChangeHandler = function (event) {
//   setUserInput({ ...userInput, enteredAmount: event.target.value });
// };
// const dateChangeHandler = function (event) {
//   setUserInput({
//     ...userInput,
//     enteredDate: event.target.value,
//   });
// };
