import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, remaining, currency } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert(
        "The value cannot exceed remaining fund of " + currency + remaining
      );
      setCost("");
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  };

  return (
    <div className="row">
      <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Department
          </label>
        </div>
        <select
          className="custom-select"
          id="inputGroupSelect01"
          onChange={(e) => setName(e.target.value)}
        >
          <option defaultValue>Choose...</option>
          <option value="Marketing" name="marketing">
            {" "}
            Marketing
          </option>
          <option value="Sales" name="sales">
            {" "}
            Sales
          </option>
          <option value="Finance" name="finance">
            {" "}
            Finance
          </option>
          <option value="HR" name="hr">
            {" "}
            HR
          </option>
          <option value="IT" name="it">
            {" "}
            IT
          </option>
          <option value="Admin" name="admin">
            {" "}
            Admin
          </option>
        </select>
        <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
          <label className="input-group-text" htmlFor="inputGroupSelect02">
            Allocation
          </label>
        </div>
        <select
          className="custom-select"
          id="inputGroupSelect02"
          onChange={(e) => setAction(e.target.value)}
        >
          <option defaultValue="Add" name="Add">
            Add
          </option>
          <option defaultValue="Reduce" name="Reduce">
            Reduce
          </option>
        </select>
        {/* <span>{currency}</span> */}
        <span style={{ marginLeft: 30, marginRight: -26 }}>
          {" "}
          {"   " + currency}
        </span>
        <input
          type="number"
          required="required"
          id="cost"
          value={cost}
          style={{ marginLeft: "2rem", size: 10 }}
          onInput={(e) => {
            const input = e.target;
            const value = input.value;
            // Remove any non-numeric characters
            input.value = value.replace(/[^0-9]/g, "");
          }}
          onChange={(event) => setCost(event.target.value)}
        ></input>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ marginLeft: "2rem" }}
          onClick={submitEvent}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AllocationForm;
