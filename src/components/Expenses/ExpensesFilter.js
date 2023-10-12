import "./ExpensesFilter.css";
import { useState } from "react";

const ExpenseFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectedYearHandler = (event) => {
    setSelectedYear(event.target.value);
    props.onSelectedYearChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectedYearHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
