import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = ({ setUserData }) => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/login', {
        nome_completo: nomeCompleto,
        telefone: telefone,
      });

      // Atualiza o estado global com os dados do usuário
      setUserData({ nomeCompleto, telefone });

      // Redireciona para a tela de verificação
      navigate('/verificar');
    } catch (error) {
      setErro('Erro ao salvar os dados de login.');
    }
  };

  return (
    <div className="main-container">
      <div className="form-wrapper">
        <div className="form-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              placeholder="Nome Completo"
              required
            />
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Telefone"
              required
            />
            <button type="submit">Entrar</button>
          </form>
          {erro && <p className="error">{erro}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
