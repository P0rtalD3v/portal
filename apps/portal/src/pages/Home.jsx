import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';

export default function Home() {
  return (
    <BaseLayout moduleName="bdep.anp">
      <div className="mt-4">
        {/* mb-0 tira o espaço de baixo. mt-1 coloca um espaço minúsculo em cima */}
        <h2 className="text-up-03 text-weight-bold mb-0">Módulos do Sistema</h2>
        <p className="mt-1">Selecione abaixo o módulo que deseja acessar.</p>
        
        <div className="row mt-5 d-flex align-items-stretch">
          
          <div className="col-sm-6 col-md-4 mb-4">
            <div className="br-card h-100 d-flex flex-column">
              <div className="card-content flex-grow-1">
                <div className="h4 text-weight-semi-bold mb-1">SICAAC</div>
                <p>Sistema de Contratos Integrados. Gestão e acompanhamento.</p>
              </div>
              <div className="card-footer mt-auto">
                <a href="http://localhost:5174/sicaac/" className="br-button primary">
                  Acessar SICAAC
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 mb-4">
            <div className="br-card h-100 d-flex flex-column">
              <div className="card-content flex-grow-1">
                <div className="h4 text-weight-semi-bold mb-1">Chamado SDT</div>
                <p>Abertura e acompanhamento de chamados.</p>
              </div>
              <div className="card-footer mt-auto">
                <a href="http://localhost:porta-do-sdt" target="_blank" rel="noreferrer" className="br-button secondary w-100">
                  Acessar Externo
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </BaseLayout>
  );
}
