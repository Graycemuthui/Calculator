import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import './index.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Quote from './components/Quote';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <div className="App">
    <section className="app-container" />
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  </div>
);

export default App;
