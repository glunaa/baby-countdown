// src/App.js
import React from 'react';
import './App.css';
import Timer from './components/Timer';
import Footer from './components/Footer'; // We'll create this component next

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <h3 className='text-center mb-4'>Baby Luna Countdown Timer</h3>
        <Timer/>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
