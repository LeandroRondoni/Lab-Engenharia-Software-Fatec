import React, { useState } from 'react';

export default function Calc2() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  function inputDigit(digit) {
    if (waitingForSecondOperand) {
      setDisplayValue(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  }

  function inputOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
    console.log(inputValue, firstOperand, nextOperator)
  }

  function performCalculation() {
    const secondOperand = parseFloat(displayValue);

    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    }

    return secondOperand;
  }

  function handleEqual() {
    if (!operator) return;

    const result = performCalculation();
    setDisplayValue(String(result));
    setFirstOperand(result);
    setOperator(null);
    setWaitingForSecondOperand(false);
  }

  function clearDisplay() {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  }

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => inputDigit(7)}>7</button>
          <button onClick={() => inputDigit(8)}>8</button>
          <button onClick={() => inputDigit(9)}>9</button>
          <button onClick={() => inputOperator('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => inputDigit(4)}>4</button>
          <button onClick={() => inputDigit(5)}>5</button>
          <button onClick={() => inputDigit(6)}>6</button>
          <button onClick={() => inputOperator('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => inputDigit(1)}>1</button>
          <button onClick={() => inputDigit(2)}>2</button>
          <button onClick={() => inputDigit(3)}>3</button>
          <button onClick={handleEqual}>=</button>
        </div>
        <div className="row">
          <button onClick={() => inputDigit(0)}>0</button>
          <button onClick={clearDisplay}>C</button>
        </div>
      </div>
    </div>
  );
}