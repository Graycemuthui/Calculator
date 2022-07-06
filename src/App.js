import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import './index.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Quote from './components/Quote';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
    <h2 className="heading-text">Lets do Math!</h2>
  </div>
);

export default App;
