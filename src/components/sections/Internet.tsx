import React from 'react';

const Internet: React.FC = () => {
  return (
    <section id="internet" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-cznet-dark mb-4">Planos de Internet</h2>
          <p className="text-cznet-gray max-w-3xl mx-auto">
            Escolha o plano ideal para você com a melhor qualidade de conexão em fibra óptica.
            Navegue com velocidade e estabilidade para todas as suas necessidades.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="bg-cznet-red p-4 text-white text-center">
              <h3 className="text-xl font-bold">Plano Básico</h3>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                {/* LINHA MODIFICADA: Comentada a tag <img> para card1.png */}
                {/* <img src="/img-internet/card1.png" alt="Plano Básico" className="h-24" /> */}
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 rounded">Card 1 Placeholder</div> {/* Placeholder */}
              </div>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-cznet-dark">100 Mega</div>
                <div className="text-cznet-gray">Download e Upload</div>
                <div className="text-2xl font-bold text-cznet-red mt-4">R$ 99,90/mês</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Wi-Fi Grátis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Instalação Grátis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Suporte 24h
                </li>
              </ul>
              <a href="#" className="btn btn-primary w-full text-center rounded-full">Assinar</a>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="bg-cznet-red p-4 text-white text-center">
              <h3 className="text-xl font-bold">Plano Família</h3>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                {/* LINHA MODIFICADA: Comentada a tag <img> para card2.png */}
                {/* <img src="/img-internet/card2.png" alt="Plano Família" className="h-24" /> */}
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 rounded">Card 2 Placeholder</div> {/* Placeholder */}
              </div>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-cznet-dark">200 Mega</div>
                <div className="text-cznet-gray">Download e Upload</div>
                <div className="text-2xl font-bold text-cznet-red mt-4">R$ 129,90/mês</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Wi-Fi Grátis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Instalação Grátis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Suporte 24h
                </li>
              </ul>
              <a href="#" className="btn btn-primary w-full text-center rounded-full">Assinar</a>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="bg-cznet-red p-4 text-white text-center">
              <h3 className="text-xl font-bold">Plano Premium</h3>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                {/* LINHA MODIFICADA: Comentada a tag <img> para card3.png */}
                {/* <img src="/img-internet/card3.png" alt="Plano Premium" className="h-24" /> */}
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 rounded">Card 3 Placeholder</div> {/* Placeholder */}
              </div>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-cznet-dark">300 Mega</div>
                <div className="text-cznet-gray">Download e Upload</div>
                <div className="text-2xl font-bold text-cznet-red mt-4">R$ 159,90/mês</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Wi-Fi Grátis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Instalação Grátis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Suporte 24h
                </li>
              </ul>
              <a href="#" className="btn btn-primary w-full text-center rounded-full">Assinar</a>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="bg-cznet-red p-4 text-white text-center">
              <h3 className="text-xl font-bold">Plano Ultra</h3>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                {/* LINHA MODIFICADA: Comentada a tag <img> para card4.png */}
                {/* <img src="/img-internet/card4.png" alt="Plano Ultra" className="h-24" /> */}
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 rounded">Card 4 Placeholder</div> {/* Placeholder */}
              </div>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-cznet-dark">500 Mega</div>
                <div className="text-cznet-gray">Download e Upload</div>
                <div className="text-2xl font-bold text-cznet-red mt-4">R$ 199,90/mês</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Wi-Fi Grátis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Instalação Grátis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Suporte 24h
                </li>
              </ul>
              <a href="#" className="btn btn-primary w-full text-center rounded-full">Assinar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internet;