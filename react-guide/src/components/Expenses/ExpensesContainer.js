import "./ExpensesContainer.css";
import ExpenseFilter from "./ExpenseFilter";
import Expenses from "./Expenses";
import Card from "../UI/Card";
import { useState } from "react";

function ExpensesContainer(props) {
  const [currentYear, setCurrentYear] = useState("2020");

  const onYearFiltered = (selectedYear) => {
    setCurrentYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        defaultYear={currentYear}
        onYearFiltered={onYearFiltered}
      />
      <Expenses items={props.expenses} year={currentYear} />
    </Card>
  );
}

export default ExpensesContainer;
