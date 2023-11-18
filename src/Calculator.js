import React, { useState } from 'react';

const Calculator = () => {
  // State for input values
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [text, setText] = useState("")

  // State for result and messages
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to perform arithmetic operation
  const calculateResult = (operator) => {
    // Validation
    if (!num1 || !num2 || isNaN(Number(num1)) || isNaN(Number(num2))) {
      setErrorMessage('Error!');
      setResult('');
      return;
    }

    // Clear any previous error message
    setErrorMessage('');

    // Perform the calculation based on the operator
    switch (operator) {
      case '+':
        setText("Success!")
        setResult(parseFloat(num1) + parseFloat(num2));
        break;
      case '-':
        setText("Success!")
        setResult(parseFloat(num1) - parseFloat(num2));
        break;
      case '*':
        setText("Success!")
        setResult(parseFloat(num1) * parseFloat(num2));
        break;
      case '/':
        if (parseFloat(num2) === 0) {
          setErrorMessage('Cannot divide by zero.');
          setResult('');
        } else {
            setText("Success!")
          setResult(parseFloat(num1) / parseFloat(num2));
        }
        break;
      default:
        setErrorMessage('Invalid operator.');
        setResult('');
    }
  };

  return (
    <div className='cont'>
      <div className='num'>
        {/* Input fields */}
        <input className='num1'
          type="text"
          value={num1}
          placeholder="Num1"
          onChange={(e) => setNum1(e.target.value)}
        />
        <input className='num1'
          type="text"
          value={num2}
          placeholder="Num2"
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className='btn'>
        {/* Arithmetic operation buttons */}
        <button className='btn1' onClick={() => calculateResult('+')}>+</button>
        <button className='btn1' onClick={() => calculateResult('-')}>-</button>
        <button className='btn1' onClick={() => calculateResult('*')}>*</button>
        <button className='btn1' onClick={() => calculateResult('/')}>/</button>
      </div>

      <div>
        {/* Display result or error message */}
        {errorMessage && <div className='error' style={{ color: 'red' }}>{errorMessage}</div>}
        {text && <div className='succes' style={{ color: 'blue' }}>{text}</div>}
        {result && <div className='result' style={{ color: 'black' }}>Result- {result}</div>}
        
      </div>
    </div>
  );
};

export default Calculator;
