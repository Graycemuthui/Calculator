function Calculator() {
  return (
    <div className="calculator-structure">
      <div className="output">
        <div className="current-operand" />
      </div>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="colored-btn">
        ÷
      </button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="colored-btn">
        x
      </button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="colored-btn">
        -
      </button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="colored-btn">
        +
      </button>
      <button className="large-btn" type="button">
        0
      </button>
      <button type="button">.</button>
      <button type="button" className="colored-btn">
        =
      </button>
    </div>
  );
}

export default Calculator;
