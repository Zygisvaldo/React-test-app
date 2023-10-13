import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import ExpenseFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filterOptions, setFilterOptions] = useState({
    2019: 2019,
    2020: 2020,
    2021: 2021,
    2022: 2022,
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          filterOptions={filterOptions}
          onChangeFilter={filterChangeHandler}
        />
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
