import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import './index.css';
import Home from './components/Navlinks/Home';
import Nav from './components/Navlinks/Nav';
import Quote from './components/Navlinks/Quote';

// eslint-disable-next-line react/prefer-stateless-function
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
