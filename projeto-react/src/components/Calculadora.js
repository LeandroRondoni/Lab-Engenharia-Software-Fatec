import React, { useState } from 'react';
import BtnCalc from './BtnCalc';
import Operations from './Operations';
import './Calculadora.css'

export default function Calculadora() {
  const [displayValue, setDisplayValue] = useState('0')
  const [operacao, setOperacao] = useState(null);
  const [firstOp, setFirstOp] = useState(null);
  const [secondOp, setSecondOp] = useState(false);

  function handleNumberClick(number) {
    if (secondOp) {
      setDisplayValue(String(number))
      setSecondOp(false)
    } else {
      setDisplayValue(displayValue === '0' ? String(number) : displayValue + number)
    }
  }

  function handleOperationClick(nextOp) {
    const value = parseFloat(displayValue)    

    if (firstOp === null) {
      setFirstOp(value)
    } else if (operacao){
      const result = performCalc()
      setDisplayValue(String(result))
      setFirstOp(result)      
    }
    setSecondOp(true)
    setOperacao(nextOp)    
  }

  function performCalc(){
    const secondOperand = parseFloat(displayValue)

    if (operacao === '+') {
      return firstOp + secondOperand
    } else if (operacao === '-') {
      return firstOp - secondOperand
    } else if (operacao === '/') {
      return firstOp / secondOperand
    } else if (operacao === '*') {
      return firstOp * secondOperand
    } else if (operacao === 'inv') {
      return secondOperand * (-1)
    } else if (operacao === 'percent') {
      return (firstOp + secondOperand) / 100
    }

    return secondOperand
  }

  function handleIgualClick() {
    if (!operacao) return

    const result = performCalc()
    setDisplayValue(String(result))
    setFirstOp(result)
    setOperacao(null)
    setSecondOp(false)
  }

  function handleClearClick(){
    setDisplayValue('0')
    setFirstOp(null)
    setOperacao(null)
    setSecondOp(false)
  }

  return (
    <div className='calc'>      
      <div className='display'>{displayValue}</div>
      <div className='calc_keys'>     
        <button 
          className='calc_key clear'
          onClick={handleClearClick}>
          AC
        </button>
        <BtnCalc
          selectedNum={displayValue}
          btns={btns}
          onSelect={btn => handleNumberClick(btn.name)}
        />

        <Operations
          selectedOp={operacao}
          operations={operations}
          onSelect={op => handleOperationClick(op.opt)}
        />
        <button 
        className='calc_key igual'
        onClick={handleIgualClick}>=</button>
      </div>      
    </div>
  );
}

const btns = [    
    {op: '1', name: 1},
    {op: '2', name: 2},
    {op: '3', name: 3},
    {op: '4', name: 4},
    {op: '5', name: 5},
    {op: '6', name: 6},
    {op: '7', name: 7},
    {op: '8', name: 8},
    {op: '9', name: 9},
    {op: '0', name: 0},
    {op: ',', name: '.'}

]

const divide= <p>&divide;</p>
const mult = <p>&times;</p>

const operations = [
    {id: 1, name:'+', opt:'+'},
    {id: 2, name:'-', opt: '-'},
    {id: 3, name: divide, opt: '/'},
    {id: 4, name: mult, opt: '*'},
    {id: 5, name: '+/-', opt: 'inv'},
    {id: 6, name: '%', opt: 'percent'},
    
]