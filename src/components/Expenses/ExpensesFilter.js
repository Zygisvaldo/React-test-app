import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {
  const selectedYearHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const filterOptions = Object.keys(props.filterOptions);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectedYearHandler}>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
