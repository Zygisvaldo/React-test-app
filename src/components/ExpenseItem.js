import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>24-12-2023</div>
      <div className="expense-item__description">
        <h2>Tesla Stock Price</h2>
        <div className="expense-item__price">$420.69</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
