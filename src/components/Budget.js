import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";

export default function Budget() {
  const appContext = useContext(AppContext);
  const budget = appContext.budget;
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    const { dispatch } = appContext; //useContext(AppContext);
    if (parseInt(event.target.value) > 20000) {
      alert("Budget cannot exceed" + appContext.currency + "20,000");
      return;
    }

    const totalExpenses = appContext.expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    if (parseInt(event.target.value) < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }

    setNewBudget(event.target.value);
    dispatch({
      type: "SET_BUDGET",
      payload: parseInt(event.target.value),
    });
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {appContext.currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
}
