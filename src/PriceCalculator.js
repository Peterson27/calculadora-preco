import React, { useState } from 'react';
import './PriceCalculator.css';

function PriceCalculator() {
  const [basePrice, setBasePrice] = useState('');
  const [markup, setMarkup] = useState('');
  const [numClients, setNumClients] = useState('');
  const [results, setResults] = useState(null);

  const calculatePrice = (e) => {
    e.preventDefault();
    const base = parseFloat(basePrice);
    const markupPercentage = parseFloat(markup);
    const clients = parseInt(numClients);

    if (isNaN(base) || isNaN(markupPercentage) || isNaN(clients)) {
      alert('Por favor, insira valores numéricos válidos em todos os campos.');
      return;
    }

    const totalCost = base;
    const revenue = base * (1 + markupPercentage / 100);
    const profit = revenue - totalCost;
    const pricePerClient = revenue / clients;
    const costPerClient = totalCost / clients;
    const profitPerClient = profit / clients;
    const profitMargin = (profit / revenue) * 100;

    setResults({
      totalCost,
      revenue,
      profit,
      pricePerClient,
      costPerClient,
      profitPerClient,
      profitMargin
    });
  };

  return (
    <div className="price-calculator">
      <h2>Calculadora de Preço e Lucro para Empreendedores</h2>
      <form onSubmit={calculatePrice}>
        <div className="input-group">
          <label htmlFor="basePrice">Custo Total (R$):</label>
          <input
            type="number"
            id="basePrice"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
            required
            min="0"
            step="0.01"
          />
        </div>
        <div className="input-group">
          <label htmlFor="markup">Markup (%):</label>
          <input
            type="number"
            id="markup"
            value={markup}
            onChange={(e) => setMarkup(e.target.value)}
            required
            min="0"
            step="0.1"
          />
        </div>
        <div className="input-group">
          <label htmlFor="numClients">Número de Clientes:</label>
          <input
            type="number"
            id="numClients"
            value={numClients}
            onChange={(e) => setNumClients(e.target.value)}
            required
            min="1"
          />
        </div>
        <button type="submit">Calcular</button>
      </form>
      
      {results && (
        <div className="results">
          <h3>Resultados</h3>
          <p>Custo Total: R$ {results.totalCost.toFixed(2)}</p>
          <p>Receita Total: R$ {results.revenue.toFixed(2)}</p>
          <p>Lucro Total: R$ {results.profit.toFixed(2)}</p>
          <p>Preço por Cliente: R$ {results.pricePerClient.toFixed(2)}</p>
          <p>Custo por Cliente: R$ {results.costPerClient.toFixed(2)}</p>
          <p>Lucro por Cliente: R$ {results.profitPerClient.toFixed(2)}</p>
          <p>Margem de Lucro: {results.profitMargin.toFixed(2)}%</p>
        </div>
      )}
      
      <div className="tips">
        <h3>Dicas para Empreendedores</h3>
        <ul>
          <li>Sempre inclua todos os custos, mesmo os indiretos, no seu cálculo de custo total.</li>
          <li>Um markup saudável geralmente está entre 20% e 50%, dependendo do seu setor.</li>
          <li>Considere o valor percebido pelo cliente, não apenas seus custos.</li>
          <li>Revise seus preços regularmente para se manter competitivo e lucrativo.</li>
        </ul>
      </div>
    </div>
  );
}

export default PriceCalculator;