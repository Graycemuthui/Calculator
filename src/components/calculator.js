/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, React } from 'react';
import calculate from '../logic/calculator';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0 });

  const handleClick = (e) => {
    const operation = e.target.value;
    const result = calculate(state, operation);
    setState(result);
  };

  const handleTextChange = (e) => {
    setState({
      total: e.target.value,
    });
  };

  return (
    <div className="calculator-app">
      <h2 className="heading-text">Lets do Math!</h2>
      <div className="calculator">
        <p className="result" onChange={handleTextChange}>
          {state.next || state.total || 0}
        </p>
        <div>
          <button type="button" onClick={handleClick} value="AC">
            AC
          </button>
          <button type="button" onClick={handleClick} value="+/-">
            +/-
          </button>
          <button type="button" onClick={handleClick} value="%">
            %
          </button>
          <button
            className="operator"
            type="button"
            onClick={handleClick}
            value="÷"
          >
            /
          </button>
        </div>
        <div>
          <button type="button" onClick={handleClick} value="7">
            7
          </button>
          <button type="button" onClick={handleClick} value="8">
            8
          </button>
          <button type="button" onClick={handleClick} value="9">
            9
          </button>
          <button
            className="operator"
            type="button"
            onClick={handleClick}
            value="x"
          >
            x
          </button>
        </div>
        <div>
          <button type="button" onClick={handleClick} value="4">
            4
          </button>
          <button type="button" onClick={handleClick} value="5">
            5
          </button>
          <button type="button" onClick={handleClick} value="6">
            6
          </button>
          <button
            className="operator"
            type="button"
            onClick={handleClick}
            value="-"
          >
            -
          </button>
        </div>
        <div>
          <button type="button" onClick={handleClick} value="1">
            1
          </button>
          <button type="button" onClick={handleClick} value="2">
            2
          </button>
          <button type="button" onClick={handleClick} value="3">
            3
          </button>
          <button
            className="operator"
            type="button"
            onClick={handleClick}
            value="+"
          >
            +
          </button>
        </div>
        <div>
          <button id="zero-btn" type="button" onClick={handleClick} value="0">
            0
          </button>
          <button type="button" onClick={handleClick} value=".">
            .
          </button>
          <button
            className="operator"
            type="button"
            onClick={handleClick}
            value="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
