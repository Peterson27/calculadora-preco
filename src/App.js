import React from 'react';
import './App.css';
import PriceCalculator from './PriceCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de Preço</h1>
        <PriceCalculator />
      </header>
    </div>
  );
}

export default App;