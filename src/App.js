import ExpenseItem from "./components/ExpenseItem";
import { expenses } from "./expenseData";

function App() {
  return (
    <div>
      <h1>Lets get started</h1>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
