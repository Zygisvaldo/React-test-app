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

  let filterInfoText = `2019, 2020, & 2022`;

  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021, & 2022";
  } else if (filteredYear === "2020") {
    filterInfoText = "2019, 2021, & 2022";
  }else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020, & 2022";
  } else {
    filterInfoText = "2019, 2020, & 2021";
  }

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
        <p>Data for year {filterInfoText} is hidden.</p>
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
