const fs = require('fs');
const path = require('path');

// Define a pasta src
const srcDir = path.join(__dirname, 'src');

// Cria uma lista de componentes com seus respectivos conteúdos
const components = [
  {
    name: 'Exercicio1.js',
    content: "import React from 'react';\n\nfunction Exercicio1() {\n  return <h1>Olá, Mundo!</h1>;\n}\n\nexport default Exercicio1;"
  },
  {
    name: 'Exercicio2.js',
    content: "import React from 'react';\n\nfunction Exercicio2() {\n  return <p>Esse é um exemplo de parágrafo renderizado no React.</p>;\n}\n\nexport default Exercicio2;"
  },
  {
    name: 'Exercicio3.js',
    content: "import React from 'react';\n\nfunction Exercicio3() {\n  return (\n    <ol>\n      <li>Estudar React</li>\n      <li>Praticar JSX</li>\n      <li>Construir Componentes</li>\n    </ol>\n  );\n}\n\nexport default Exercicio3;"
  },
  {
    name: 'Exercicio4.js',
    content: "import React from 'react';\n\nfunction Exercicio4() {\n  return <img src='https://example.com/imagem.jpg' alt='Exemplo' />;\n}\n\nexport default Exercicio4;"
  },
  {
    name: 'Exercicio5.js',
    content: "import React from 'react';\n\nfunction Exercicio5() {\n  return <button>Clique Aqui</button>;\n}\n\nexport default Exercicio5;"
  },
  {
    name: 'Exercicio6.js',
    content: "import React from 'react';\n\nfunction Exercicio6() {\n  return <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>Visite o site do ReactJS</a>;\n}\n\nexport default Exercicio6;"
  },
  {
    name: 'Exercicio7.js',
    content: "import React from 'react';\n\nfunction Exercicio7() {\n  return (\n    <div>\n      <h1>Título Principal</h1>\n      <h2>Subtítulo Explicativo</h2>\n    </div>\n  );\n}\n\nexport default Exercicio7;"
  },
  {
    name: 'Exercicio8.js',
    content: "import React from 'react';\n\nfunction Exercicio8() {\n  const eDia = true; // Pode mudar para false para testar\n  return <h1>{eDia ? 'Bom dia' : 'Boa noite'}</h1>;\n}\n\nexport default Exercicio8;"
  },
  {
    name: 'Exercicio9.js',
    content: "import React from 'react';\n\nfunction Exercicio9() {\n  return (\n    <div style={{ backgroundColor: 'lightblue', margin: '20px', padding: '10px' }}>\n      <p>Essa div tem estilo personalizado!</p>\n    </div>\n  );\n}\n\nexport default Exercicio9;"
  },
  {
    name: 'Exercicio10.js',
    content: "import React from 'react';\n\nfunction Exercicio10() {\n  return (\n    <React.Fragment>\n      <h3>Cabeçalho 1</h3>\n      <h3>Cabeçalho 2</h3>\n      <p>Este é um parágrafo dentro de um Fragment.</p>\n    </React.Fragment>\n  );\n}\n\nexport default Exercicio10;"
  },
];

// Cria os arquivos na pasta src
components.forEach(component => {
  fs.writeFileSync(path.join(srcDir, component.name), component.content);
});

console.log('Arquivos criados com sucesso!');