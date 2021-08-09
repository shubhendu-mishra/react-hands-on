import "./ExpensesContainer.css";
import Expenses from "./Expenses";
import Card from "../UI/Card";

function ExpensesContainer(props) {
  return (
    <Card className="expenses">
      <Expenses items={props.expenses} />
    </Card>
  );
}

export default ExpensesContainer;
