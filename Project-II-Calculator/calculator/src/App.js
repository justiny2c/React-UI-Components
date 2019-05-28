import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from "./components/ButtonComponents/NumberButton"
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div class ="wrapper">
      <div class = "display">
      <CalculatorDisplay />
      </div>
      <div class = "calc-content">
        <NumberButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
