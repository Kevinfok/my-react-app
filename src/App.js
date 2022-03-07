//import logo from "./logo.svg";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";

const dummy_Expense = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 94.12,
    date: new Date(2021, 12, 22),
  },
  {
    id: 2,
    title: "Tv Insurance",
    amount: 2924.12,
    date: new Date(2021, 2, 28),
  },
  {
    id: 3,
    title: "Phone Insurance",
    amount: 291234.12,
    date: new Date(2021, 2, 21),
  },
  {
    id: 4,
    title: "Game Insurance",
    amount: 2.12,
    date: new Date(2021, 2, 2),
  },
  {
    id: 5,
    title: "XX Insurance",
    amount: 994.12,
    date: new Date(2021, 2, 12),
  },
]

function App() {
  const [expenses,setExpense]= useState(dummy_Expense);
  const addExpenseHandler =(expense)=>{
    setExpense(prevExpenses => {
      return [expense,...prevExpenses]
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses item={expenses}/>
        
      </header>
    </div>
  );
}
//testing
export default App;
