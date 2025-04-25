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
      recursos: ['Download em comodato', 'IPTV', 'TV Play']
    },
    {
      velocidade: 600,
      preco: 119.90,
      recursos: ['Download em comodato', 'IPTV', 'TV Play']
    },
    {
      velocidade: 500,
      preco: 104.90,
      recursos: ['Download em comodato', 'IPTV', 'TV Play']
    },
    {
      velocidade: 400,
      preco: 99.90,
      recursos: ['Download em comodato', 'IPTV', 'TV Play']
    }
  ];

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-cznet-red mb-4">
        Assine os melhores planos de internet fibra óptica! 🚀
      </h2>
      <p className="text-center mb-10">
        Navegue com total liberdade, assista ao melhor conteúdo, jogue em tempo real, trabalhe, estude em casa ou nos seus negócios, residências, condomínios e escritório, sempre ao seu lado.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {planos.map((plano, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">{plano.velocidade} MEGA</h3>
            <ul className="mb-6">
              {plano.recursos.map((recurso, i) => (
                <li key={i} className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {recurso}
                </li>
              ))}
            </ul>
            <div className="text-xl font-bold mb-4">
              R$ {plano.preco.toFixed(2)}<span className="text-sm font-normal">/mês</span>
            </div>
            <button className="w-full bg-yellow-400 text-center py-2 rounded-md hover:bg-yellow-500">
              Contratar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanosCards;
