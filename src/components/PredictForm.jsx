import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PredictForm.css'; // CSS atualizado

const PredictForm = () => {
  const [texto, setTexto] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://172.16.72.223:8000/predict', { texto });
      navigate('/resultado', { state: response.data });
    } catch (error) {
      setErro('Erro ao classificar a notícia.');
    }
  };

  return (
    <div className="main-container">
      <div className="form-card">
        <h2>Verificar Notícia</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Insira o link ou o texto da notícia"
          />
          <button type="submit">Verificar notícia</button>
        </form>
        {erro && <p className="error">{erro}</p>}
      </div>
    </div>
  );
};

export default PredictForm;
