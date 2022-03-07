//import react from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  
  const saveExpenseDateHandler = (enterExpenseData) => {

    const expenseData = { ...enterExpenseData, 
      id: Math.random.toString() 
    };
    props.onAddExpense(expenseData);
  };
  
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
