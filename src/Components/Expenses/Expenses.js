import ExpenseItems from "./ExpenseItems";

function Expenses(props) {
  ;

  return (
    <div>
      
      {props.item.map((expense) => (
        <ExpenseItems
        key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
