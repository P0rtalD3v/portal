import React from 'react';

// Função para pintar cada letra do logo sequencialmente
const renderColoredLogo = (text) => {
  const colors = ['#1351b4', '#ffcd07', '#00883d']; // Azul Gov, Amarelo Gov, Verde Gov
  return text.split('').map((char, index) => (
    <span key={index} style={{ color: colors[index % colors.length] }}>
      {char}
    </span>
  ));
};

export default function BaseLayout({ moduleName = "bdep.anp", children }) {
  return (
    <div 
      className="template-base" 
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      
      {/* CABEÇALHO (Trocado para container-fluid para usar a largura toda) */}
      <header className="br-header" id="header" data-sticky="data-sticky">
        <div className="container-fluid">
          <div className="header-top">
            <div className="header-logo">
              <div className="header-sign">
                {/* Fonte ultra grossa (900) e letras coladas (-2px) */}
                <span 
                  style={{ 
                    fontSize: '2rem', 
                    fontFamily: 'Rawline, sans-serif',
                    fontWeight: 900,
                    letterSpacing: '-2px'
                  }}
                >
                  {renderColoredLogo(moduleName)}
                </span>
              </div>
            </div>
            <div className="header-actions">
              <div className="header-login">
                <button className="br-sign-in small" type="button" data-trigger="login">
                  <i className="fas fa-user" aria-hidden="true"></i>
                  <span className="d-sm-inline">Entrar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ÁREA CENTRAL (Trocado para container-fluid) */}
      <main className="container-fluid py-4" id="main" style={{ flexGrow: 1 }}>
        {children}
      </main>

      {/* RODAPÉ (Trocado para container-fluid) */}
      <footer className="br-footer pt-3 mt-auto" id="footer">
        <div className="container-fluid">
          <div className="info">
            <div className="text-down-01 text-medium pb-3">
              Desenvolvido para o Portal BDEP. Padrão Digital de Governo.
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}