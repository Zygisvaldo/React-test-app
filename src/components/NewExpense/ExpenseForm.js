import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(formattedDate);

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: formattedDate,
  }); */

  const titleChangeHandler = (event) => {
    console.log("Title changed", event.target.value);
    setEnteredTitle(event.target.value);

    // because React schedules state changes, the previous updated state, might not be updated by this time:

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // so its better to pass in an arrow function, which return an updated state, and previousState is always updated

    /* setUserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value };
    }); */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */

    /* setUserInput((previousState) => {
      return { ...previousState, enteredAmount: event.target.value };
    }); */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */

    /* setUserInput((previousState) => {
      return { ...previousState, enteredDate: event.target.value };
    }); */
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            defaultValue={formattedDate}
            min="2023-01-01"
            max="2027-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
