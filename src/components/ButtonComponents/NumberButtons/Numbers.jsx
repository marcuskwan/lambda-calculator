import React, { useState } from "react";

//import any components needed
import { NumberButton } from "./NumberButton.jsx";
//Import your array data to from the provided data file
import { numbers } from "../../../data";
export const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [numbersData, setNumber] = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbersData.map(number => (
        <NumberButton key={number} number={number} setNumber={setNumber} concatItem={props.concatItem}/>
      ))}
    </div>
  );
};

export default Numbers;
