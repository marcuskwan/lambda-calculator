import React from "react";

export const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={()=>props.concatItem(props.number)}>{props.number}</button>
    </>
  );
};
