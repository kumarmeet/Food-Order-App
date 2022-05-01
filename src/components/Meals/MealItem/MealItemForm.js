import React from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const input = {
    id: "price_" + props.id,
    type: "number",
    min: "1",
    max: "5",
    defaultValue: "1",
  };

  return (
    <form className={styles.form}>
      <Input label="Amount" input={{ ...input }} />

      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
