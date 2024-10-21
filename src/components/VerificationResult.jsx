import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './VerificationResult.css';

const VerificationResult = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { resultado = "Indefinido", confianca = 0 } = state || {};

  return (
    <div className="result-container">
      <header className="header">
        <h1>Chill Tech News</h1>
      </header>

      <h2>Avaliação de Veracidade</h2>

      <div className="icons">
        {resultado === "Verdadeira" ? (
          <span className="icon-true">✅</span>
        ) : (
          <span className="icon-false">❌</span>
        )}
      </div>

      <p className="explanation">
        Esta notícia foi classificada como <strong>{resultado.toLowerCase()}</strong>.
      </p>

      <div className="buttons-container">
        <button className="new-check-button" onClick={() => navigate('/verificar')}>
          Verificar outra notícia
        </button>
        <button className="login-button" onClick={() => navigate('/')}>
          Voltar para Login
        </button>
      </div>
    </div>
  );
};

export default VerificationResult;
