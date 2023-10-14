import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(formattedDate);
  const [showExpensesForm, setShowExpensesForm] = useState(false);

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

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(formattedDate);
  };

  const cancelFormHandler = () => {
    setShowExpensesForm(false);
  };

  const openFormHandler = () => {
    setShowExpensesForm(true);
  };

  let fromContent = (
    <div>
      <button onClick={openFormHandler}>Open Expense Form</button>
    </div>
  );

  if (showExpensesForm === true) {
    fromContent = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={(event) =>
                inputChangeHandler("title", event.target.value)
              }
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={(event) =>
                inputChangeHandler("amount", event.target.value)
              }
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2023-01-01"
              max="2027-01-01"
              onChange={(event) =>
                inputChangeHandler("date", event.target.value)
              }
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelFormHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  return <div>{fromContent}</div>;
};

export default ExpenseForm;
