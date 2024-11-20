// src/index.js
import './index.css'; // Optional, aber wenn du styles verwenden willst
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'; // Optional, für Web-Vitals
import DynamicTable from './table.js'; // Importiere die DynamicTable-Komponente

const root = ReactDOM.createRoot(document.getElementById('root')); // Finde das Root-Element
root.render(
  <React.StrictMode>
    <DynamicTable /> {/* Render die DynamicTable-Komponente */}
  </React.StrictMode>
);

reportWebVitals(); // Optional, für Web-Vitals
