import React from 'react';

const BusinessSection = () => {
  return (
    <section id="empresas" className="py-16 bg-gray-100 relative">
      {/* Banner "PARA VOCÊ E SUA EMPRESA" */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#E53935] text-white px-12 py-4 rounded-full text-xl font-bold">
          PARA VOCÊ E SUA EMPRESA
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-8">
        <div className="bg-[#E53935] rounded-lg overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 relative">
            {/* Elementos decorativos triangulares dourados */}
            <div className="absolute right-0 bottom-0 w-40 h-40 border-2 border-[#FFD700] transform rotate-45"></div>
            <div className="absolute left-20 top-10 w-24 h-24 border-2 border-[#FFD700] transform -rotate-12"></div>
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-white text-2xl font-bold mb-2">TELEFONIA FIXA</h2>
              <h3 className="text-white text-3xl font-bold mb-6">tenha os melhores serviços</h3>
              
              <p className="text-white text-lg mb-8">
                Você sabia que algumas operadoras estão encerrando suas linhas antigas e você pode perder seu número? 
                Faça a portabilidade do seu número para o nosso sistema!
              </p>
              
              <button className="bg-white text-[#E53935] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
                Fazer portabilidade &gt;&gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
