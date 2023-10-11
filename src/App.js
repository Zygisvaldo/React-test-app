import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./expenseData";

const App = () => {
  return (
    <div>
      <NewExpense />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
