import React, { useState } from "react";

//import any components needed
import { SpecialButton } from "./SpecialButton.jsx";
//Import your array data to from the provided data file
import { specials } from "../path/to/data";
export const Specials = () => {
  // STEP 2 - add the imported data to state
const [specialsData,setSpecial] = useState(specials)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialsData.map(special => (<SpecialButton setSpecial={setSpecial}/>))}
    </div>
  );
};