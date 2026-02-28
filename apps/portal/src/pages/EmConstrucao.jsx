import React from 'react';
import { useLocation } from 'react-router-dom';

export default function EmConstrucao() {
  const location = useLocation();
  
  // Pega o caminho da URL (ex: /sicaac/relatorios/contratos) para exibir na tela
  const caminho = location.pathname.replace('/sicaac/', '').replace(/\//g, ' > ');

  return (
    <div className="mt-4">
      <h2 className="text-up-02 text-weight-bold mb-3">Módulo em Desenvolvimento</h2>
      
      <div className="br-message info" role="alert">
        <div className="icon">
          <i className="fas fa-info-circle fa-lg" aria-hidden="true"></i>
        </div>
        <div className="content">
          <span className="message-title text-weight-bold">Página em construção. </span>
          <span className="message-body">
            A seção <strong>"{caminho.toUpperCase()}"</strong> estará disponível em breve. As tabelas e o gerenciamento de dados serão implementados aqui.
          </span>
        </div>
      </div>
    </div>
  );
}