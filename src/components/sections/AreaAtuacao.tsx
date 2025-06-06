import React from 'react';

const AreaAtuacao: React.FC = () => {
  return (
    <section id="area-atuacao" className="section bg-cznet-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-cznet-dark mb-4">Área de Atuação</h2>
          <p className="text-cznet-gray max-w-3xl mx-auto">
            Conheça as regiões onde a CZnet está presente, levando internet de alta velocidade com fibra óptica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="heading-md text-cznet-dark mb-4">Cidades Atendidas</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cznet-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  São Paulo - Capital
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cznet-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Guarulhos
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cznet-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Osasco
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cznet-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Santo André
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cznet-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  São Bernardo do Campo
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-medium text-cznet-dark mb-2">Não encontrou sua cidade?</h4>
                <p className="text-cznet-gray mb-4">
                  Entre em contato conosco para verificar a disponibilidade na sua região.
                </p>
                <a href="#" className="btn btn-primary rounded-full">Verificar disponibilidade</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              {/* Placeholder para mapa ou imagem da área de cobertura */}
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cznet-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
            <h3 className="heading-md text-cznet-dark mb-2">Expansão Contínua</h3>
            <p className="text-cznet-gray">
              Estamos em constante expansão para levar internet de qualidade para mais regiões. 
              Nossa rede de fibra óptica cresce a cada dia para atender mais clientes com a 
              melhor tecnologia disponível no mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaAtuacao;
