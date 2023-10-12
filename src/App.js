import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./expenseData";

const App = () => {
  const addExpenseHandler = (expense) => {
    expenses.push(expense);
    console.log(expense);
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
