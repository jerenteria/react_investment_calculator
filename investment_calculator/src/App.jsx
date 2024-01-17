import React, { Fragment, useState } from "react";
import Header from "./Components/Header.jsx";
import InputField from "./Components/InputField.jsx";
import Results from './Components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // set inputIdentifier to newValue; + turns input from a string into an int
      };
    });
  }

  return (
    <Fragment>
      <Header />
      <InputField userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please input a duration greater than 0</p>}
      {inputIsValid && <Results input={userInput} />}
    </Fragment>
  );
}

export default App;
