import ExpenseList from "./components/Expenses/ExpenseList";
import { expenses } from "./expenseData";

function App() {
  return (
    <div>
      <h1>Lets get started</h1>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
