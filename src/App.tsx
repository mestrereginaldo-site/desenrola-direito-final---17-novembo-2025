import React from 'react';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>
        🎉 Desenrola Direito - Site está funcionando! 🎉
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
        Se você está vendo esta mensagem, o React está carregando corretamente.
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
        O problema era apenas de estilização.
      </p>
      <div style={{ 
        backgroundColor: '#333', 
        padding: '20px', 
        marginTop: '20px',
        borderRadius: '8px'
      }}>
        <h2 style={{ color: '#4CAF50' }}>Próximos passos:</h2>
        <ul style={{ marginLeft: '20px' }}>
          <li>React ✓ Carregado</li>
          <li>JavaScript ✓ Funcionando</li>
          <li>Estilização ⏳ Ajustando...</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
