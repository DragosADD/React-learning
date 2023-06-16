import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFileteredYear] = useState("2020");

  function returnYear(valueFromFilter) {
    setFileteredYear(valueFromFilter);
    console.log(filteredYear, `This is located in Expenses.js`);
  }
  const filteredProp = props.expenses.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} getYear={returnYear} />
        <ExpensesChart expenses={filteredProp}></ExpensesChart>
        <ExpensesList items={filteredProp}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;

/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem> */
