import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import { AppProvider } from "./context/AppContext";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          {/*     Budget component       */}
          <div className="col-sm">
            <Budget />
          </div>
                {/* Add Remaining component here*/}
          <div className="col-sm">
            <Remaining />
          </div>{" "}
          {/* Add ExpenseTotal component here */}
          <div className="col-sm">
            <ExpenseTotal />
          </div>{" "}
          <h3 className="mt-3">Allocation</h3>
          {/* Add ExpenseList component here */}
          <ExpenseList /> {/* Add ExpenseItem component here */}
          {/* <ExpenseItem /> */}
          {/* Add AllocationForm component here under */}
          <h3 className="mt-3">Change allocation</h3>
          <AllocationForm />
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
