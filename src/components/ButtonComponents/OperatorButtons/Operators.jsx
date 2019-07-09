import React, { useState } from "react";

//import any components needed
import { OperatorButton } from "./OperatorButton.jsx";
//Import your array data to from the provided data file
import { operators } from "../path/to/data";
export const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsData, setOperator] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorData.map(operator => (
        <OperatorButton operator={operator}/>
      ))}
    </div>
  );
};