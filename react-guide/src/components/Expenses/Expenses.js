import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ items, year }) {
  console.log("in expenses", year);
  return items.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    ></ExpenseItem>
  ));
}

export default Expenses;
