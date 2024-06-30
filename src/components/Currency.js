import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import styles from "./Currency.module.css";
// import { type } from "@testing-library/user-event/dist/type";
const Currency = () => {
  const options = [
    { label: "$ Dollar", value: "$" },
    { label: "£ Pound", value: "£" },
    { label: "€ Euro", value: "€" },
    { label: "₹ Ruppee", value: "₹" },
  ];
  const { dispatch, currency } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  //   const [selectOption, setSelectedOption] = useState(null);
  const signValue = currency;
  let current = "";
  for (let index = 0; index < options.length; index++) {
    const element = options[index];
    if (element.value === signValue) {
      current = element.label;
      break;
    }
  }
  const [currentCurrency, setCurrentCurrency] = useState(current);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (option) => {
    setCurrentCurrency(option.label);
    setIsOpen(false);
    dispatch({
      type: "CHG_CURRENCY",
      payload: option.value,
    });
  };

  return (
    <div className={styles.dropdown + " alert alert-warning"}>
      <span onClick={handleToggle}>
        {"Currency (" + currentCurrency + ") ▼"}
        {/* {options.filter((option) => option.value === signValue)[0].label} */}
        {/* {selectOption ? selectOption : "Select an option"} */}
      </span>
      {isOpen && (
        <div className={styles.dropdownmenu}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.dropdownitem}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Currency;
