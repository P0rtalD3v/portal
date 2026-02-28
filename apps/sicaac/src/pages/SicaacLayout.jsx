import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';

export default function SicaacLayout() {
  return (
    <BaseLayout moduleName="sicaac">
      <div className="br-breadcrumb mb-4">
        <ul className="crumb-list">
          <li className="crumb home"><a className="br-button circle" href="/"><span className="sr-only">Portal</span><i className="fas fa-home"></i></a></li>
          <li className="crumb" data-active="active"><i className="fas fa-chevron-right"></i><span>SICAAC</span></li>
        </ul>
      </div>

      <div className="row">
        {/* MENU LATERAL */}
        <div className="col-md-3 mb-4">
          <div className="br-list" role="list">
            
            <div className="br-item header bg-gray-10 text-weight-bold text-up-01 mt-2"><i className="fas fa-chart-bar mr-2"></i> Relatórios</div>
            <Link className="br-item" to="/relatorios/boletim-operacional"><div className="content">Boletim Operacional</div></Link>
            <Link className="br-item" to="/relatorios/boletim-dados"><div className="content">Boletim dos Dados</div></Link>
            <Link className="br-item" to="/relatorios/sumario-executivo"><div className="content">Sumário Executivo</div></Link>
            <Link className="br-item" to="/relatorios/contratos-convenios"><div className="content">Contratos e Convênios</div></Link>
            <Link className="br-item" to="/relatorios/agenda-regulatoria"><div className="content">Agenda Regulatória</div></Link>
            <Link className="br-item" to="/relatorios/fiscalizacoes"><div className="content">Fiscalizações</div></Link>
            <Link className="br-item" to="/relatorios/arrecadacoes"><div className="content">Arrecadações</div></Link>
            <Link className="br-item" to="/relatorios/mapas-tendencias"><div className="content">Mapas de Tendências</div></Link>
            <Link className="br-item" to="/relatorios/atendimento-sociedade"><div className="content">Atendimento à Sociedade</div></Link>

            <div className="br-item header bg-gray-10 text-weight-bold text-up-01 mt-3"><i className="fas fa-users mr-2"></i> Área de Interação</div>
            <Link className="br-item" to="/interacao/boletim-dados-submissao"><div className="content">Submissão de matérias</div></Link>
            <Link className="br-item" to="/interacao/fiscalizacoes"><div className="content">Fiscalizações</div></Link>
            <Link className="br-item" to="/interacao/planejamento-projetos"><div className="content">Planejamento de Projetos</div></Link>
            <Link className="br-item" to="/interacao/sumario-executivo"><div className="content">Sumário Executivo</div></Link>
            <Link className="br-item" to="/interacao/arrecadacoes"><div className="content">Arrecadações</div></Link>
            <Link className="br-item" to="/interacao/mapas-tendencias"><div className="content">Mapas de Tendências</div></Link>
            <Link className="br-item" to="/interacao/integrantes-sdt"><div className="content">Integrantes SDT</div></Link>

            <div className="br-item header bg-gray-10 text-weight-bold text-up-01 mt-3"><i className="fas fa-building mr-2"></i> CCOA</div>
            <Link className="br-item" to="/ccoa/gerenciamento-boletim-dados"><div className="content">Gerenciamento Bol. Dados</div></Link>
            <Link className="br-item" to="/ccoa/gerenciamento-boletim-operacional"><div className="content">Gerenciamento Bol. Operacional</div></Link>
            <Link className="br-item" to="/ccoa/planejamento-contratacoes"><div className="content">Planejamento das Contratações</div></Link>
            <Link className="br-item" to="/ccoa/contratos"><div className="content">Contratos</div></Link>
            <Link className="br-item" to="/ccoa/acordos-convenios"><div className="content">Acordos e Convênios</div></Link>
            <Link className="br-item" to="/ccoa/agenda-regulatoria"><div className="content">Agenda Regulatória</div></Link>
            <Link className="br-item" to="/ccoa/atendimento-sociedade"><div className="content">Atendimento à Sociedade</div></Link>
            <Link className="br-item" to="/ccoa/cronograma-ferias"><div className="content">Cronograma de Férias</div></Link>

          </div>
        </div>

        {/* CONTEÚDO DINÂMICO */}
        <div className="col-md-9 pl-md-4">
          <div className="br-card p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}