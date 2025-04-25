import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cznet-orange to-cznet-red py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Planos Residenciais
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              A melhor internet para o seu lar
            </h2>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800">
              Tenho interesse
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <img 
                src="/placeholder-family.jpg" 
                alt="Família usando internet"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
