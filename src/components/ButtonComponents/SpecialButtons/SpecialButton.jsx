import React from "react";

export const SpecialButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        onClick={() =>
          props.special === "C"
            ? props.clearDisplay()
            : props.concatItem(props.special)
        }>
        {props.special}
      </button>
    </>
  );
};
