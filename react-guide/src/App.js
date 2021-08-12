import "./App.css";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";

import ExpensesContainer from "./components/Expenses/ExpensesContainer";
import { useState } from "react";

const App = () => {
  const expensesList = [
    {
      id: "e1",
      title: "Notebook",
      amount: 30,
      date: new Date(2020, 7, 18),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Petrol",
      amount: 3500.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Car Repair",
      amount: 4500,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(expensesList);

  const onNewExpenseAddedHandler = (newExpenseData) => {
    setExpenses((previousExpenses) => {
      return [newExpenseData, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onNewExpenseAdded={onNewExpenseAddedHandler}></NewExpense>
      <ExpensesContainer expenses={expenses} />;
    </div>
  );
};

export default App;
