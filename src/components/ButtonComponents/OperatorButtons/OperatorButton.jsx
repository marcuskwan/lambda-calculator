import React from "react";

export const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        onClick={() =>
          props.operator.char === "="
            ? props.calculateTotal()
            : props.concatItem(props.operator.value)
        }>
        {props.operator.char}
      </button>
    </>
  );
};
