import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitEventHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    props.onAddToCart(enteredAmount);
  };

  const input = {
    id: "price_" + props.id,
    type: "number",
    min: "1",
    max: "5",
    defaultValue: "1",
  };

  return (
    <form onSubmit={submitEventHandler} className={styles.form}>
      <Input ref={amountInputRef} label="Amount" input={{ ...input }} />

      <button>+ Add</button>
      {!amountIsValid && <p>Amount is not valid</p>}
    </form>
  );
};

export default MealItemForm;
