import React from 'react';
import './index.css';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <section className="app-container" />
        <Calculator />
      </div>
    );
  }
}

export default App;
