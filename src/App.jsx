import React, { useState, useEffect } from "react";
import "./App.css";
// STEP 4 - import the button and display components
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.jsx";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.jsx";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.jsx";
import Display from "./components/DisplayComponents/Display.jsx";
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo.jsx";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [total, updateTotal] = useState("0");

  const concatItem = item => {
    console.log("item being clicked: ", item);
    total === "0" && Number(item) < 10
      ? updateTotal(item)
      : updateTotal(total + item);
  };

  useEffect(() => {
    console.log("total: ", total);
  }, [total]);

  const clearDisplay = () => updateTotal("0");
  const calculateTotal = () =>
    // eslint-disable-next-line
    updateTotal(eval(total));

  return (
    <div className="container">
      <Logo />
      <Display total={total} />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Numbers concatItem={concatItem} />
        <Operators concatItem={concatItem} calculateTotal={calculateTotal} />
        <Specials clearDisplay={clearDisplay} concatItem={concatItem} />
      </div>
    </div>
  );
}

export default App;
