import React from 'react';
import Calculator from './components/calculator';
import './index.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
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
