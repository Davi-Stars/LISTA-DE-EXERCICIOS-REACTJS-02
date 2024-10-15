import React from 'react';

function Exercicio5() {
  const handleClick = () => {
    window.location.href = 'https://www.meutimao.com.br'; // Site do Corinthians
  };

  return (
    <div className="exercise">
      <h3>5. Renderizar um Botão</h3>
      <button onClick={handleClick}>Clique Aqui e Vem com Nós!</button>
      <hr />
    </div>
  );
}

export default Exercicio5;