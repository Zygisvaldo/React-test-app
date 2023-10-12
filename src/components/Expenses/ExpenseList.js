import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import ExpenseFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
  const onSelectedYear = (year) => {
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onSelectedYearChange={onSelectedYear} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.title}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseList;
