import React from 'react';

interface Plano {
  velocidade: number;
  preco: number;
  recursos: string[];
}

const PlanosCards: React.FC = () => {
  const planos: Plano[] = [
    {
      velocidade: 700,
      preco: 129.90,
      recursos: [
        '1 Roteador em comodato',
        'BOX',
        '+TVPLAY',
        'Livro / Biblioteca digital'
      ]
    },
    {
      velocidade: 600,
      preco: 119.90,
      recursos: [
        '1 Roteador em comodato',
        'BOX',
        '+TVPLAY',
        'Livro / Biblioteca digital'
      ]
    },
    {
      velocidade: 500,
      preco: 104.90,
      recursos: [
        '1 Roteador em comodato',
        'BOX',
        '+TVPLAY',
        'Livro / Biblioteca digital'
      ]
    },
    {
      velocidade: 400,
      preco: 99.90,
      recursos: [
        '1 Roteador em comodato',
        'BOX',
        '+TVPLAY',
        'Livro / Biblioteca digital'
      ]
    }
  ];

  // Função que escolhe o ícone baseado no recurso
  const getIcon = (recurso: string) => {
    if (recurso.includes('Roteador')) {
      return '/icons/roteador.svg';
    } else if (recurso.includes('BOX')) {
      return '/icons/box.svg';
    } else if (recurso.includes('TVPLAY')) {
      return '/icons/tvplay.svg';
    } else if (recurso.includes('Livro')) {
      return '/icons/book.png';
    } else {
      return '/icons/check.svg'; // ícone padrão
    }
  };

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#e6341a] mb-4">
        Assine os melhores planos de internet fibra óptica! 🚀
      </h2>
      <p className="text-center mb-10 max-w-3xl mx-auto">
        Navegue com total liberdade, assista ao melhor conteúdo, jogue em tempo real, trabalhe, estude em casa ou nos seus negócios, residências, condomínios e escritório, sempre ao seu lado.
      </p>

      {/* Centralizar o grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {planos.map((plano, index) => (
  <div
    key={index}
    className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 w-full h-96 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
  >
    <div>
      <h3 className="text-2xl font-bold mb-4 text-[#e6341a] text-center">{plano.velocidade} MEGA</h3>
      <ul className="mb-6 space-y-2">
        {plano.recursos.map((recurso, i) => (
          <li key={i} className="flex items-center">
            <img src={getIcon(recurso)} alt="Ícone" className="w-6 h-6 mr-2" />
            <span className="text-sm">{recurso}</span>
          </li>
        ))}
      </ul>
      <div className="text-2xl font-bold text-[#e6341a] text-clip">
        R$ {plano.preco.toFixed(2).replace('.', ',')}
        <span className="text-sm font-normal">/mês</span>
      </div>
    </div>
    <button className="w-full mt-4 bg-[#FFC107] text-center py-2 rounded-full hover:bg-yellow-500 font-semibold">
      Contratar
    </button>
  </div>
))}
      </div>
    </div>
  );
};

export default PlanosCards;
