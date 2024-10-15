import React from 'react';

function Exercicio8() {
  const isMorning = true; // Mude para false para testar a outra condição

  return (
    <div className="exercise">
      <h3>8. Renderizar Conteúdo Condicional</h3>
      <p>{isMorning ? 'Bom dia, Fiel!' : 'Boa noite, torcida!'}</p>
      <hr />
    </div>
  );
}

export default Exercicio8;